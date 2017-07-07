module Example exposing (..)

import Html exposing (Html, div, text, button, iframe, hr)
import Html.Attributes exposing (style, src)
import Html.Events exposing (onClick)
import Pdf


-- import Task
-- import Json.Encode as Encode

import Rocket exposing ((=>))


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , view = view
        , update = update >> Rocket.batchUpdate
        , subscriptions = (\_ -> Pdf.receive_previewBlobUrl ReceivedBlob)
        }


type alias Model =
    { blob : Maybe String }


init : ( Model, Cmd Msg )
init =
    { blob = Nothing }
        ! [ Cmd.none ]


type Msg
    = GetBlob
    | ReceivedBlob String
    | AndAnotherRectangle
    | TimeTravelling
    | Download



-- |> Pdf.text "myText" 100 100


pdfDocument : Pdf.GroupOfInstructionsOrDocument
pdfDocument =
    Pdf.createDocument Pdf.portrait Pdf.mm Pdf.a4
        |> Pdf.text "PDF Document" 30 30
        |> Pdf.rect 30 50 100 100


updateExistingDocument : Pdf.GroupOfInstructionsOrDocument
updateExistingDocument =
    Pdf.emptyGroupOfInstructions
        |> Pdf.text "Document is updated.." 40 70


timeTravellingPdf : Pdf.GroupOfInstructionsOrDocument
timeTravellingPdf =
    Pdf.emptyGroupOfInstructions
        |> Pdf.text "Time traveling pdf .. yupii ! :)) " 40 100
        |> Pdf.addPage
        |> Pdf.text "New page.." 40 70



-- |> Pdf.rect


update : Msg -> Model -> ( Model, List (Cmd Msg) )
update msg model =
    case msg of
        GetBlob ->
            model
                => [ Pdf.createNewDocumentAndPreview pdfDocument ]

        ReceivedBlob blob ->
            { model | blob = Just blob }
                => []

        AndAnotherRectangle ->
            model
                => [ Pdf.update updateExistingDocument ]

        TimeTravelling ->
            model
                => [ Pdf.update timeTravellingPdf ]

        Download ->
            model
                => [ Pdf.download "someCustomName.pdf" ]


view : Model -> Html Msg
view model =
    div []
        [ button [ onClick GetBlob ] [ text "preview PDF" ]
        , button [ onClick AndAnotherRectangle ] [ text "update existing document" ]
        , button [ onClick TimeTravelling ] [ text "update again + new page" ]
        , hr [] []
        , model.blob |> Maybe.withDefault "  Nothing to preview" |> text
        , hr [] []
        , iframe
            [ style
                [ "width" => "600px"
                , "height" => "500px"
                ]
            , model.blob |> Maybe.withDefault "" |> src
            ]
            []
        , hr [] []
        , button [ onClick Download ] [ text "Download Pdf" ]
        ]
