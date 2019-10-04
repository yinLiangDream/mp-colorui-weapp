import Taro from "@tarojs/taro";
import { ClCard, ClLayout, ClTimeline } from "mp-colorui";
import { updateList } from "../../model/index";

export default function Update() {
  this.config = {
    navigationBarTitleText: "更新日志"
  };

  return (
    <ClCard type="full">
      <ClLayout
        padding="xlarge"
        paddingDirection="bottom"
        margin="xlarge"
        marginDirection="bottom"
      >
        <ClTimeline times={updateList} />
      </ClLayout>
    </ClCard>
  );
}
