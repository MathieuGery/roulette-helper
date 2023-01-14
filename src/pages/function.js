import { COMPILER_INDEXES } from "next/dist/shared/lib/constants"

export function resetGame(setData) {
    if (typeof window !== "undefined") {
        localStorage.clear()
        console.log("Reset")
        setGame(setData)
    }
}

export function setGame(setData) {
    const init_data = {"count": 0, "bet_value": 1, "previous_bet_value": 0, "color": "RED", "previous_color": "BLACK"}
    if (typeof window !== "undefined") {
        console.log("Init")
        localStorage.setItem("data", JSON.stringify(init_data))
        setData(init_data)
    }
}

export function calc(setData) {
    var data = JSON.parse(localStorage.getItem("data"))
    console.log("data", data)
    data["count"] = data["count"] += 1
    localStorage.setItem("data", JSON.stringify(data))
    setData(data)
}
