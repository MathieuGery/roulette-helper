export function resetGame(setData) {
    if (typeof window !== "undefined") {
        localStorage.clear()
        console.log("Reset")
        setGame(setData)
    }
}

export function setGame(setData) {
    const init_data = {"count": 0, "bet_value": 1, "previous_bet_value": 0, "colors": ["RED", "BLACK", "RED", "RED", "BLACK", "BLACK"]}
    if (typeof window !== "undefined") {
        console.log("Init")
        localStorage.setItem("data", JSON.stringify(init_data))
        setData(init_data)
    }
}

export function calc(setData, win) {
    var data = JSON.parse(localStorage.getItem("data"))
    data["count"] = data["count"] += 1
    data["previous_bet_value"] = data["bet_value"]
    console.log("data", data)

    if (win) {
        data["bet_value"] = 1
    } else {
        data["bet_value"] =  data["bet_value"] * 2
    }
    data.colors.push(data.colors.shift())

    localStorage.setItem("data", JSON.stringify(data))
    setData(data)
}
