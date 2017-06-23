module Example exposing (..)

import Html exposing (Html, div, text, button)
import Html.Events exposing (onClick)
import Pdf exposing (mm, portrait, a4)
import Rocket exposing ((=>))


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , view = view
        , update = update >> Rocket.batchUpdate
        , subscriptions = (\_ -> Sub.none)
        }


type alias Model =
    { blob : String }


init : ( Model, Cmd Msg )
init =
    { blob = "just an empty blob for now" }
        ! [ Cmd.none ]


type Msg
    = GetBlob
    | ReceivedBlob String


pdfDocument : Pdf.Document
pdfDocument =
    Pdf.createDocument portrait mm a4



-- |> Pdf.text "myText" 100 100


update : Msg -> Model -> ( Model, List (Cmd Msg) )
update msg model =
    case msg of
        GetBlob ->
            model
                => [ Pdf.getBlob pdfDocument ReceivedBlob ]

        ReceivedBlob blob ->
            { model | blob = blob }
                => []


view : Model -> Html Msg
view model =
    div []
        [ button [ onClick GetBlob ] [ text "get blob" ]
        , text model.blob
        ]
