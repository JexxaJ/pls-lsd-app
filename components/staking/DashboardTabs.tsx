import classNames from "classnames";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface Props {
  selectedTab: "stake" | "unstake" | "withdraw";
  onChangeTab: (tab: "stake" | "unstake" | "withdraw") => void;
  showWithdrawTab?: boolean;
}

export const DashboardTabs = (props: Props) => {
  const router = useRouter();
  const { showWithdrawTab } = props;

  const showWithdraw = useMemo(() => {
    return showWithdrawTab || router.query.tab === "withdraw";
  }, [router.query, showWithdrawTab]);

  return (
    <div
      className={classNames(
        "p-[.04rem] h-[.42rem] grid items-stretch bg-color-bg2 rounded-[.3rem] w-[2.2rem]"
      )}
      style={{
        gridTemplateColumns: "40% 60%",
      }}
    >
      <div
        className={classNames(
          "cursor-pointer flex items-center justify-center text-[.16rem] rounded-[.3rem]",
          props.selectedTab === "stake" || props.selectedTab === "unstake"
            ? "text-color-highlight bg-color-highlight"
            : "text-color-text1"
        )}
        onClick={() => props.onChangeTab("stake")}
      >
        Stake
      </div>

      {showWithdraw && (
        <div className="flex items-stretch">
          <div className="ml-[.1rem] w-[0.01rem] h-[.22rem] bg-[#DEE6F7] dark:bg-bg1Dark self-center" />
          <div
            className={classNames(
              "flex-1 ml-[.1rem] cursor-pointer flex items-center justify-center text-[.16rem] rounded-[.3rem]",
              props.selectedTab === "withdraw"
                ? "text-color-highlight bg-color-highlight"
                : "text-color-text1"
            )}
            onClick={() => props.onChangeTab("withdraw")}
          >
            Withdraw
          </div>
        </div>
      )}
    </div>
  );
};
