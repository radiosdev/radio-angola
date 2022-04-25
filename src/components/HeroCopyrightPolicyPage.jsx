import { React, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

function HeroTermsOfUse() {
  const [elementIsVisible, setElementIsVisible] = useState(false);

  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={300}
    >
      <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[100%] relative z-[3]">
        <div className="p-8" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et pariatur ipsam obcaecati natus ipsa quisquam? Molestiae doloribus alias maiores assumenda architecto impedit maxime illo adipisci sapiente. Quos, natus quidem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio ipsum officiis ab reiciendis nam obcaecati cupiditate architecto totam deserunt? Quas, harum voluptates fuga ea dicta voluptatum maxime possimus iure!Lorem lorem ipsum
        </div>
      </div>
    </VisibilitySensor>
  );
}

export default HeroTermsOfUse;
