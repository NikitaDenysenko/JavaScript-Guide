const friends = [
    {
        username: "David",
        status: "online",
        lastActivity: 10,
    },
    {
        username: "Lucy",
        status: "offline",
        lastActivity: 22,
    },
    {
        username: "Bob",
        status: "online",
        lastActivity: 104,
    },
]

const whosOnline = (friends) => {
    const userSatuses = {}
    const online = []
    const offline = []
    const away = []
    friends.forEach((user) => {
        if (user.status === "offline") {
            offline.push(user.username)
            return
        }
        if (user.status === "online" && user.lastActivity > 10) {
            away.push(user.username)
            return
        } else {
            online.push(user.username)
            return
        }
    })
    if(online.length > 0) {
        userSatuses.online = online
    }
    if(offline.length > 0) {
        userSatuses.offline = offline
    }
    if(away.length > 0) {
        userSatuses.away = away
    }
    return userSatuses
}
console.log(whosOnline(friends))