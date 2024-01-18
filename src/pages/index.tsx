import cn from "classnames"
import { useState } from "react"
import { Chart } from "react-google-charts"

import type { NextPage } from "next"

type drivingForce = {
  name: string
  x: number
  y: number
}

type scenario = {
  title: string
  story: string
}

const scenarios: scenario[] = [
  {
    title: "Scenario 1",
    story:
      "環境保護と技術革新に対する高い意識を持つ国民が増え、環境保護と技術革新を支援する政策が増える。その結果、環境保護と技術革新が進み、環境に優しい持続可能な社会が実現する。",
  },
  {
    title: "Scenario 2",
    story:
      "環境保護と技術革新に対する高い意識を持つ国民が増え、環境保護と技術革新を支援する政策が増える。その結果、環境保護と技術革新が進み、環境に優しい持続可能な社会が実現する。",
  },
  {
    title: "Scenario 3",
    story:
      "環境保護と技術革新に対する高い意識を持つ国民が増え、環境保護と技術革新を支援する政策が増える。その結果、環境保護と技術革新が進み、環境に優しい持続可能な社会が実現する。",
  },
  {
    title: "Scenario 4",
    story:
      "環境保護と技術革新に対する高い意識を持つ国民が増え、環境保護と技術革新を支援する政策が増える。その結果、環境保護と技術革新が進み、環境に優しい持続可能な社会が実現する。",
  },
]

const Home: NextPage = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [nextPage, setNextPage] = useState(false)
  const [selectedScenario, setSelectedScenario] = useState(0)
  const drivingForces: drivingForce[] = [
    { name: "伝統産業への政策支持", x: -0.7, y: -0.6 },
    { name: "環境規制の緩和", x: -0.8, y: -0.5 },
    { name: "短期的利益追求", x: -0.8, y: -0.5 },
    { name: "化石燃料依存の継続", x: -0.6, y: -0.7 },
    { name: "消費主導型のライフスタイル", x: -0.4, y: -0.3 },
    { name: "環境への意識低下", x: -0.5, y: -0.4 },
    { name: "革新的な技術への投資不足", x: -0.3, y: -0.8 },
    { name: "既存技術の維持", x: -0.5, y: -0.6 },
    { name: "経済成長を優先する政策", x: 0.7, y: 0.0 },
    { name: "新技術への積極的支援", x: 0.0, y: 0.8 },
    { name: "高成長産業へのシフト", x: 0.6, y: 0.5 },
    { name: "技術投資の増加", x: 0.0, y: 0.7 },
    { name: "イノベーションへの関心増", x: 0.0, y: 0.6 },
    { name: "環境意識と経済発展の両立", x: 0.5, y: 0.5 },
    { name: "革新的なクリーンテクノロジーの開発と普及", x: 0.0, y: 1.0 },
    { name: "強力な環境保護政策", x: 0.9, y: 0.0 },
    { name: "持続可能性を重視", x: 0.8, y: 0.0 },
    { name: "環境への影響を考慮した産業構造", x: 0.7, y: 0.0 },
    { name: "緑の経済", x: 0.8, y: 0.0 },
    { name: "持続可能な生活様式への移行", x: 0.6, y: 0.0 },
    { name: "環境保護意識の高まり", x: 0.7, y: 0.0 },
    { name: "既存技術の持続可能な利用", x: 0.5, y: -0.4 },
    { name: "環境フレンドリーな手法の採用", x: 0.6, y: 0.0 },
    { name: "持続可能性とイノベーションを支援する政策", x: 0.8, y: 0.9 },
    { name: "クリーンエネルギー", x: 0.7, y: 0.8 },
    { name: "サステナブル産業への投資", x: 0.9, y: 0.7 },
    { name: "環境保護と技術革新に対する高い意識", x: 0.6, y: 0.6 },
    { name: "革新的で持続可能な技術の開発と普及", x: 0.0, y: 1.0 },
  ]
  // falseがdrivingForcesの要素の数だけ入った配列
  const [selectedList, setSelectedList] = useState(drivingForces.map(() => false))
  const EPBox = ({ index, force }: { index: number; force: drivingForce }) => {
    return (
      <div
        className={cn(
          "p-2 rounded border-solid border cursor-pointer hover:opacity-70",
          selectedList[index] ? "bg-blue-8 text-white" : "border-blue-8 text-blue-8",
        )}
        onClick={() => {
          if (selectedList[index]) {
            setX(x + force.x)
            setY(y + force.y)
          } else {
            setX(x - force.x)
            setY(y - force.y)
          }
          setSelectedList(selectedList.map((selected, i) => (i === index ? !selected : selected)))
        }}
      >
        {force.name}
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="w-full pb-3 text-2xl font-bold text-blue-9">
        {nextPage ? "Scenario / Story" : "Driving Force"}
      </div>
      {nextPage ? (
        <div className="flex flex-col items-center">
          <div className={cn("lg:flex lg:grid-cols-2 gap-2")}>
            <div className="mt-12 flex flex-col items-center gap-1">
              <div className="flex items-center">
                シナリオ：
                <div
                  className={cn(
                    "text-2xl font-bold",
                    selectedScenario === 0
                      ? "text-red-5"
                      : selectedScenario === 1
                        ? "text-yellow-5"
                        : selectedScenario === 2
                          ? "text-green-5"
                          : "text-blue-5",
                  )}
                >
                  {scenarios[selectedScenario].title}
                </div>
              </div>
              <div className="rounded border-2 border-solid border-gray-7 p-2">
                <div className="font-bold">ストーリー</div>
                <div>{scenarios[selectedScenario].story}</div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center max-lg:flex-col">
                <Chart
                  chartType="ScatterChart"
                  height="320px"
                  width="320px"
                  data={[
                    ["x", "y"],
                    [x / drivingForces.length, y / drivingForces.length],
                  ]}
                  options={{
                    legend: "none",
                    colors: ["#E67700"],
                    pointShape: "star",
                    pointSize: 18,
                    hAxis:
                      x / drivingForces.length < 0.5 &&
                      x / drivingForces.length > -0.5 &&
                      y / drivingForces.length < 0.5 &&
                      y / drivingForces.length > -0.5
                        ? {
                            viewWindow: {
                              min: -0.5,
                              max: 0.5,
                            },
                          }
                        : {
                            viewWindow: {
                              min: -1,
                              max: 1,
                            },
                          },
                    vAxis:
                      x / drivingForces.length < 0.5 &&
                      x / drivingForces.length > -0.5 &&
                      y / drivingForces.length < 0.5 &&
                      y / drivingForces.length > -0.5
                        ? {
                            viewWindow: {
                              min: -0.5,
                              max: 0.5,
                            },
                          }
                        : {
                            viewWindow: {
                              min: -1,
                              max: 1,
                            },
                          },
                  }}
                />
                <div className="flex flex-col items-center">
                  革新技術推進
                  <div className="flex items-center">
                    <div className="[writing-mode:vertical-rl]">経済成長</div>
                    <div className="h-24 border-solid border-gray-9">
                      <div className="flex border-0 border-b border-solid border-gray-9">
                        <div
                          className={cn(
                            "w-12 h-12 border-r border-0 border-solid border-gray-9",
                            x > 0 && y > 0 && selectedScenario === 1 && "bg-yellow-5",
                          )}
                        ></div>
                        <div className={cn("w-12 h-12", selectedScenario === 0 && "bg-red-5")}></div>
                      </div>
                      <div className="flex">
                        <div
                          className={cn(
                            "w-12 h-12 border-r border-0 border-solid border-gray-9",
                            selectedScenario === 2 && "bg-green-5",
                          )}
                        ></div>
                        <div className={cn("w-12 h-12", selectedScenario === 3 && "bg-blue-5")}></div>
                      </div>
                    </div>
                    <div className="[writing-mode:vertical-rl]">持続可能性</div>
                  </div>
                  既存技術維持
                </div>
              </div>
              <div className="gap-2 rounded border border-solid border-gray-7 p-2">
                <div className="font-bold">選択したドライビングフォース</div>
                <div className="flex flex-wrap gap-1">
                  {selectedList
                    .filter((selected) => selected)
                    .map((selected, i) => (
                      <div className={cn("p-1 rounded bg-blue-8 text-white font-medium")} key={i}>
                        {selected && drivingForces[i].name}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className="mt-10 flex w-fit cursor-pointer rounded bg-blue-5 p-2 font-bold text-white hover:opacity-70"
            onClick={() => setNextPage(false)}
          >
            Driver Force 選択に戻る
          </div>
        </div>
      ) : (
        <div className="h-full w-full">
          <div className="flex flex-wrap gap-2 px-4">
            {drivingForces.map((force, i) => (
              <EPBox index={i} force={force} key={i} />
            ))}
          </div>
          <div className="flex justify-center pt-4">
            <div
              className={cn(
                "cursor-pointer rounded p-2 font-bold text-white",
                selectedList.every((selected) => selected === false)
                  ? "bg-gray-5 cursor-not-allowed"
                  : "bg-blue-5 hover:opacity-70",
              )}
              onClick={() => {
                setNextPage(true)
                if (x > 0) {
                  if (y > 0) {
                    setSelectedScenario(0)
                  } else {
                    setSelectedScenario(3)
                  }
                } else {
                  if (y > 0) {
                    setSelectedScenario(1)
                  } else {
                    setSelectedScenario(2)
                  }
                }
              }}
            >
              NEXT {">>"}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
