import Widget from "./Widget";
import WidgetTags from "./WidgetTags";
import "../rightSideBar/RightSidebar.css"

export default function RightSidebar(){
    return(
        <div className="flex basis-1/4 right-sidebar w-full grid overflow-hidden h-screen mb-0">
            <Widget/>
            <WidgetTags/>
        </div>
    )
}