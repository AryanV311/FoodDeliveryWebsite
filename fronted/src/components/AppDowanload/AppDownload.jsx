import { assets } from "../../assets/assets"
import "./AppDownload.css"

export const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
        <p>For Better Experience Dowanload <br /> Tomato App</p>
        <div className="app-download-platform">
            <img src={assets.play_store} alt="play store" />
            <img src={assets.app_store} alt="app store" />
        </div>
    </div>
  )
}
