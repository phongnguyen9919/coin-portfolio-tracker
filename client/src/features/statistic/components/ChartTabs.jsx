import { Flex } from "@chakra-ui/react";
import Tab from "@/components/ui/Tab";
import { addTabThunk, switchTabThunk } from "@/store/action/action.tab";
import { useDispatch, useSelector } from "react-redux";
export default function ChartTabs() {
  const { tabs, activeTab } = useSelector((state) => state.tab);
  const dispatch = useDispatch();
  const handleAddTab = () => {
    dispatch(addTabThunk());
  };
  const handleSwitchTab = (tabId) => {
    dispatch(switchTabThunk({ tabId }));
  };
  return (
    <Flex className="flex bg-slate-900 flex-nowrap w-full overflow-y-scroll">
      {Object.values(tabs).map((tab) => (
        <Tab
          key={tab.id}
          tabName={tab.name}
          isActive={tab.id == activeTab}
          onClick={() => handleSwitchTab(tab.id)}
        />
      ))}

      <Flex
        className="bg-orange p-3 border border-slate-400  text-black rounded-md border-dashed w-15 cursor-pointer"
        onClick={handleAddTab}
      >
        +
      </Flex>
    </Flex>
  );
}
