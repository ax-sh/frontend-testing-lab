import pino from "pino";
// import pretty from "pino-pretty";

// const stream = pretty({
//   colorize: true,
// });
const logger = pino({
  timestamp: pino.stdTimeFunctions.isoTime,
  //   msgPrefix: "[HTTP] ",
  browser: {
    asObject: true,
    serialize: true,
  },
  //   name: "myapp",
  //   base: {
  //     env: process.env.NODE_ENV ? process.env.NODE_ENV : "unknown",
  //   },
  //   //   formatters: {
  //   //     messageKey: "msg",
  //   //     level: (label) => {
  //   //       console.log(3333, label);
  //   //       return { level: label };
  //   //     },
  //   //   },

  //   formatters: {
  //     messageKey: "message",
  //     level(label, number) {
  //       return {
  //         // severity:
  //         //   PinoLevelToSeverityLookup[label] || PinoLevelToSeverityLookup["info"],
  //         level: number,
  //       };
  //     },
  //   },

  //   //   prettyPrint: {
  //   //     colorize: true,
  //   //     translateTime: "SYS:standard",
  //   //     // ignore: "hostname,pid",
  //   //   },
  //   transport: {
  //     target: "pino-pretty",
  //   },
});

export default logger;
