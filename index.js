import { Navigation } from "react-native-navigation"
import welcome_screen from "./Screen/welcome_screen"
Navigation.registerComponent('welcome_screen',() => welcome_screen)
Navigation.events().registerAppLaunchedListener(()=>{
    Navigation.setRoot({
        root:{
            component:{
                name:'welcome_screen'
            }
        }
    })
})