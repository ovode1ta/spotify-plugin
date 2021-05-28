var findModule = (item) => Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}}, [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default[item]!==void 0).exports.default;
setInterval(() => {
            if (findModule("getActiveSocketAndDevice") != undefined) {
                if (!findModule("getActiveSocketAndDevice").getActiveSocketAndDevice().socket.isPremium) {
                    findModule(
                        "getActiveSocketAndDevice"
                    ).getActiveSocketAndDevice().socket.isPremium = true;
                    console.log("Patched Spotify Premium");
                }
            }
        }, 500);