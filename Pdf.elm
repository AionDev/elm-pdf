module Pdf exposing (..)

import Task exposing (Task)
import Native.Pdf


type Document
    = Document { layout : Layout, dimensions : Dimension, paperSize : PaperSize } (List Instruction)


type Instruction
    = AddPage Layout Dimension PaperSize
    | Rect X Y Width Height
    | Text String X Y


type Layout
    = Portrait
    | Landscape


portrait : Layout
portrait =
    Portrait


landscape : Layout
landscape =
    Landscape


type Dimension
    = Milimeter
    | Centimeter
    | Meter
    | Inch


mm : Dimension
mm =
    Milimeter


cm : Dimension
cm =
    Centimeter


m : Dimension
m =
    Meter


inch : Dimension
inch =
    Inch


type PaperSize
    = A4
    | A3
    | A2


a4 : PaperSize
a4 =
    A4


a3 : PaperSize
a3 =
    A3


a2 : PaperSize
a2 =
    A2


type alias X =
    Int


type alias Y =
    Int


type alias Width =
    Int


type alias Height =
    Int


createDocument : Layout -> Dimension -> PaperSize -> Document
createDocument layout dimensions paperSize =
    Document { layout = layout, dimensions = dimensions, paperSize = paperSize } []


addDefaultPage : Document -> Document
addDefaultPage (Document settings doc) =
    (AddPage Portrait Milimeter A4 :: doc)
        |> Document settings


addPage : Layout -> Dimension -> PaperSize -> Document -> Document
addPage layout dimensions paperSize (Document settings doc) =
    (AddPage layout dimensions paperSize :: doc)
        |> Document settings


rect : X -> Y -> Width -> Height -> Document -> Document
rect x y width height (Document settings doc) =
    (Rect x y width height :: doc)
        |> Document settings


text : String -> X -> Y -> Document -> Document
text text x y (Document settings doc) =
    (Text text x y :: doc)
        |> Document settings


getBlob : Document -> (String -> msg) -> Cmd msg
getBlob (Document settings doc) tag =
    Task.perform tag (Native.Pdf.getBlob doc)
