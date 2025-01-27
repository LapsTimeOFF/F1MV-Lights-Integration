const config = {
    Settings:
        {
            generalSettings:
                {
                    // automatically turn off the lights when the session has ended
                    autoTurnOffLights: true,
                    // the default brightness of the lights
                    defaultBrightness: 100,

                    hideLogs: true,

                    // here you can define other colors then the default ones
                    colorSettings:
                        {
                            green: {
                                r: 0,
                                g: 255,
                                b: 0
                            },
                            yellow: {
                                r: 255,
                                g: 150,
                                b: 0
                            },
                            red: {
                                r: 255,
                                g: 0,
                                b: 0
                            },
                            safetyCar: {
                                r: 255,
                                g: 150,
                                b: 0
                            },
                            vsc: {
                                r: 255,
                                g: 150,
                                b: 0
                            },
                            vscEnding: {
                                r: 255,
                                g: 150,
                                b: 0

                            }
                        }
                },

            MultiViewerForF1Settings:
                {
                  liveTimingURL: "http://localhost:10101",
                  f1mvCheck: true,
                },

            hueSettings:
                {
                    hueDisable: true,
                    deviceIDs: ["DEVICE_ID_HERE", "DEVICE_ID_HERE"],
                    token: undefined
                },

            ikeaSettings:
                {
                    // set this to true if you don't want to use IKEA lights
                    ikeaDisable: true,

                    // Here you need to fill in the security code from your IKEA Tradfri gateway, you can find it on the bottom of the gateway.
                    securityCode: "SECURITY_CODE_HERE",
                    // You can get these values by clicking "Settings" in the app and then click "Get Device IDs"
                    deviceIDs: ["DEVICE_ID_HERE", "DEVICE_ID_HERE"],
                },

            goveeSettings:
                {
                    // set this to true if you don't want to use Govee lights
                    goveeDisable: true,
                },

            openRGBSettings:
                {
                    // set this to true if you don't want to use OpenRGB
                    openRGBDisable: true,
                    // the IP address of your OpenRGB server
                    openRGBServerIP: "localhost",
                    // the port of your OpenRGB server
                    openRGBServerPort: 6742,
                },

            nanoLeafSettings:
                {
                    // set this to true if you don't want to use Nanoleaf lights
                    nanoLeafDisable: true,
                    devices: []
                },

            yeeLightSettings:
                {
                    // set this to true if you don't want to use Yeelight lights
                    yeeLightDisable: true,

                    // Put the IP address of your Yeelight device(s) here, if you have multiple, separate them with a comma (Eg: "IP_ADDRESS_HERE-1", "IP_ADDRESS_HERE-2").
                    deviceIPs: ["IP_ADDRESS_HERE"],
                },

            streamDeckSettings:
                {
                    // set this to true if you don't want to use Stream Deck
                    streamDeckDisable: true,
                },

            discordSettings:
                {
                    // set this to true if you don't want to use Discord RPC
                    discordRPCDisable: true,
                },

            advancedSettings:
                {
                    // Only set this to true if you want to see the debug messages in the console.
                    debugMode: false,
                    // update channel, you can choose between "latest", "beta" and "alpha"
                    updateChannel: "latest",

                    //analytics
                    // if you want to help me improve this project, you can enable analytics
                    // this will send me some data about how many times the lights have been switched on and off, etc...
                    // this will not send any personal data
                    // if you want to disable this, set this to false

                    analytics: true,
                }
        },
        // do not change this version!
        version: 11,
    devConfig:
        {
            autoStartDevTools: false
        }
}
module.exports = config;