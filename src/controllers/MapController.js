import GatherTownService from "../services/GatherTownService.js";
import Logger from "../util/logger.js";
import Validator from "../util/validator.js";

export default {
  list: (req, res) => {
    let validation = Validator.check([
      Validator.required(req.query, "spaceId"),
      Validator.required(req.query, "mapName"),
      Validator.required(req.query, "apiKey"),
    ]);

    if (!validation.pass) {
      Logger.error([JSON.stringify(validation)]);
      return res.status(422).json(validation.result);
    }

    GatherTownService.mapData({
      spaceId: req.query.spaceId,
      mapName: req.query.mapName,
      apiKey: req.query.apiKey,
    })
      .then((response) => {
        Logger.out([`${req.method} ${req.originalUrl} ${res.statusCode}`]);
        return res.json(response.data);
      })
      .catch((error) => {
        Logger.error([JSON.stringify(error)]);
        return res.status(500).json(error);
      });
  },
};
