const SceneGenerator = require("./middleware/scenes/admin/admin.scenes");
const RentSceneGenerator = require('./middleware/scenes/admin/admin.rent.scene')
const {Scenes, session} = require("telegraf");
const {bot} = require("./connections/token.connection");

const adminScene = new SceneGenerator()
const rentScene = new RentSceneGenerator()

const mainAdminScene = adminScene.generateEntitiesEditingScene()

const rentEntityEditingSceneEn = rentScene.generateEntitiesRentEditEnScene()
const rentEntityEditingSceneAz = rentScene.generateEntitiesRentEditAzScene()
const rentEntityEditingSceneRu = rentScene.generateEntitiesRentEditRuScene()

const stage = new Scenes.Stage([mainAdminScene, rentEntityEditingSceneEn, rentEntityEditingSceneAz, rentEntityEditingSceneRu])
bot.use(session())
bot.use(stage.middleware())