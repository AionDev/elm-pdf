port module Pdf exposing (..)

-- import Task exposing (Task)
-- import Html exposing (Html)

import Json.Encode as Encode


-- import Json.Decode as Decode exposing (Decoder)
-- import Json.Decode.Pipeline as Pipeline

import Rocket exposing ((=>))


---------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------
--- Data Structure


type GroupOfInstructionsOrDocument
    = GroupOfInstructions (List Instruction)
    | Document
        { layout : Layout
        , dimension : Dimension
        , paperSize : PaperSize
        , instructions : List Instruction
        }


type Layout
    = Portrait
    | Landscape


type Dimension
    = Milimeter
    | Centimeter
    | Inch
    | Points


type PaperSize
    = A4
    | A3
    | A2


type alias Top =
    Int


type alias Left =
    Int


type alias Width =
    Int


type alias Height =
    Int


type Instruction
    = AddPage
    | Rect Top Left Width Height
      -- TODO: add TextWithFlags that is supported in js pdf library: text(text, x, y, flags)
    | Text String Top Left



---------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------
--- DECODERS AND ENCODERS


groupOfInstructionsOrDocumentEncoder : GroupOfInstructionsOrDocument -> Encode.Value
groupOfInstructionsOrDocumentEncoder groupOfInstructionsOrDocument =
    case groupOfInstructionsOrDocument of
        GroupOfInstructions instructions ->
            instructionsEncoder instructions

        Document document ->
            Encode.object
                [ ( "orientation", layoutEncoder document.layout )
                , ( "unit", dimensionEncoder document.dimension )
                , ( "format", paperSizeEncoder document.paperSize )
                , ( "commands", instructionsEncoder document.instructions )
                ]


layoutEncoder : Layout -> Encode.Value
layoutEncoder layout =
    case layout of
        Portrait ->
            Encode.string "portrait"

        Landscape ->
            Encode.string "landscape"


dimensionEncoder : Dimension -> Encode.Value
dimensionEncoder dimension =
    case dimension of
        Milimeter ->
            Encode.string "mm"

        Centimeter ->
            Encode.string "cm"

        Inch ->
            Encode.string "in"

        Points ->
            Encode.string "pt"


paperSizeEncoder : PaperSize -> Encode.Value
paperSizeEncoder paperSize =
    case paperSize of
        A4 ->
            Encode.string "a4"

        A3 ->
            Encode.string "a3"

        A2 ->
            Encode.string "a2"


instructionsEncoder : List Instruction -> Encode.Value
instructionsEncoder instructions =
    instructions
        |> List.reverse
        |> List.map oneInstructionEncoder
        |> Encode.list


oneInstructionEncoder : Instruction -> Encode.Value
oneInstructionEncoder instruction =
    case instruction of
        AddPage ->
            [ "instruction" => Encode.string "AddPage" ]
                |> Encode.object

        Rect left top width height ->
            [ "instruction" => Encode.string "Rect"
            , "x" => Encode.int left
            , "y" => Encode.int top
            , "w" => Encode.int width
            , "h" => Encode.int height
            ]
                |> Encode.object

        Text text left top ->
            [ "instruction" => Encode.string "Text"
            , "text" => Encode.string text
            , "x" => Encode.int left
            , "y" => Encode.int top
            ]
                |> Encode.object



---------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------
--- Exposed Functions for generating and building the PDF document.


createDocument : Layout -> Dimension -> PaperSize -> GroupOfInstructionsOrDocument
createDocument layout dimension paperSize =
    Document
        { layout = layout
        , dimension = dimension
        , paperSize = paperSize
        , instructions = []
        }


portrait : Layout
portrait =
    Portrait


landscape : Layout
landscape =
    Landscape


mm : Dimension
mm =
    Milimeter


cm : Dimension
cm =
    Centimeter


inch : Dimension
inch =
    Inch


a4 : PaperSize
a4 =
    A4


a3 : PaperSize
a3 =
    A3


a2 : PaperSize
a2 =
    A2



---------------------------------------------------------------------------------------------------------------------------------
-- Instructions.


emptyGroupOfInstructions : GroupOfInstructionsOrDocument
emptyGroupOfInstructions =
    GroupOfInstructions []


addDefaultPage : GroupOfInstructionsOrDocument -> GroupOfInstructionsOrDocument
addDefaultPage groupOfInstructionsOrDocument =
    AddPage
        |> addInstruction groupOfInstructionsOrDocument


addPage : GroupOfInstructionsOrDocument -> GroupOfInstructionsOrDocument
addPage groupOfInstructionsOrDocument =
    AddPage
        |> addInstruction groupOfInstructionsOrDocument


rect : Left -> Top -> Width -> Height -> GroupOfInstructionsOrDocument -> GroupOfInstructionsOrDocument
rect x y width height document =
    Rect x y width height
        |> addInstruction document


text : String -> Left -> Top -> GroupOfInstructionsOrDocument -> GroupOfInstructionsOrDocument
text text x y document =
    Text text x y
        |> addInstruction document



---------------------------------------------------------------------------------------------------------------------------------
-- terminal functions.
---- -- -- -- Tasks.
-- This functions will create a js object in memory - and will mutate it troughout the life of the app - will wait unthil you delete it.
-- This is useful sometimes- because is much more performant to add something to the pdf doc - instead of creating it with each elm-cmd you send..
-- but it also can cause problems - because you might cmd a print, or preview - when the document is not even created.


port commandJsTo_createNewDocumentAndPreview : Encode.Value -> Cmd msg


createNewDocumentAndPreview : GroupOfInstructionsOrDocument -> Cmd msg
createNewDocumentAndPreview groupOfInstructionsOrDocument =
    -- use this to ensure that the document was created previously.
    case groupOfInstructionsOrDocument of
        GroupOfInstructions _ ->
            Cmd.none

        Document document ->
            Document document
                |> groupOfInstructionsOrDocumentEncoder
                |> commandJsTo_createNewDocumentAndPreview


port commandJsTo_update : Encode.Value -> Cmd msg


update : GroupOfInstructionsOrDocument -> Cmd msg
update instructions =
    instructions
        |> groupOfInstructionsOrDocumentEncoder
        |> commandJsTo_update


port commandJsTo_print : () -> Cmd msg


print : Cmd msg
print =
    commandJsTo_print ()


port commandJsTo_download : String -> Cmd msg


download : String -> Cmd msg
download fileName =
    commandJsTo_download fileName


port commandJsTo_delete : () -> Cmd msg


delete : Cmd msg
delete =
    commandJsTo_delete ()



-- until you delete the pdf document - will continously take up space in memory.
--- --- -- Build Cmds.
--  javascript will garbage collect the pdf object between each elm call.
-- so if you call previewDocument 5 times - it will recreate the document 5 times - it can cause performance issues.
-- if you want a different document - make sure you send a different document form elm. using update will not help.
-- OutBound ports = from elm to js.


port commandJsTo_previewDocument : Encode.Value -> Cmd msg


previewDocument : GroupOfInstructionsOrDocument -> Cmd msg
previewDocument groupOfInstructionsOrDocument =
    -- use this to ensure that the document was created previously.
    case groupOfInstructionsOrDocument of
        GroupOfInstructions _ ->
            Cmd.none

        Document document ->
            Document document
                |> groupOfInstructionsOrDocumentEncoder
                |> commandJsTo_previewDocument


port commandJsTo_printDocument : Encode.Value -> Cmd msg


printDocument : GroupOfInstructionsOrDocument -> Cmd msg
printDocument groupOfInstructionsOrDocument =
    -- use this to ensure that the document was created previously.
    case groupOfInstructionsOrDocument of
        GroupOfInstructions _ ->
            Cmd.none

        Document document ->
            Document document
                |> groupOfInstructionsOrDocumentEncoder
                |> commandJsTo_printDocument


port commandJsTo_downloadDocument : Encode.Value -> Cmd msg


downloadDocument : GroupOfInstructionsOrDocument -> Cmd msg
downloadDocument groupOfInstructionsOrDocument =
    -- use this to ensure that the document was created previously.
    case groupOfInstructionsOrDocument of
        GroupOfInstructions _ ->
            Cmd.none

        Document document ->
            Document document
                |> groupOfInstructionsOrDocumentEncoder
                |> commandJsTo_downloadDocument



-- build SUBSCRIPTION
-- InBound ports = from js to elm.


port received_previewBlobUrl : (String -> msg) -> Sub msg


receive_previewBlobUrl : (String -> msg) -> Sub msg
receive_previewBlobUrl tag =
    received_previewBlobUrl tag


port received_printStatus : (Bool -> msg) -> Sub msg


receive_PrintStatus : (Bool -> msg) -> Sub msg
receive_PrintStatus tag =
    received_printStatus tag


port received_downloadStatus : (Bool -> msg) -> Sub msg


receive_downloadStatus : (Bool -> msg) -> Sub msg
receive_downloadStatus tag =
    received_downloadStatus tag



---------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------
-- HELPERS - not exposed!


addInstruction : GroupOfInstructionsOrDocument -> Instruction -> GroupOfInstructionsOrDocument
addInstruction groupOfInstructionsOrDocument instruction =
    case groupOfInstructionsOrDocument of
        GroupOfInstructions instructions ->
            instruction
                :: instructions
                |> GroupOfInstructions

        Document document ->
            { document
                | instructions =
                    instruction :: document.instructions
            }
                |> Document
