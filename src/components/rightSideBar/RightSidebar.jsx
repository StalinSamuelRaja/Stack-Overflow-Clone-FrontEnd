import Widget from "./Widget";
import WidgetTags from "./WidgetTags";

export default function RightSidebar() {
  return (
    <div className="flex basis-1/4 right-sidebar w-full grid overflow-hidden mb-0">
      <div className="h-auto max-h-screen overflow-y-auto mb-10">
        <div className="mb-10"><Widget /></div>
       <div> <WidgetTags /></div>
      </div>
    </div>
  );
}
