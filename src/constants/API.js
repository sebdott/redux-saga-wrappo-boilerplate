// export const clientID = 18;
export const clientID = 31;

export const checkIpInfo = '/api/v1/update/checkIpInfo';
export const PRIZE_SETTING = `/api/v1/adminsettings/user/prizeSettings?clientId=${clientID}`;
export const downloadLink = `/config/downConfig.json`;

export const CONTENTS = `/api/v1/cms/internal/pc/${clientID}/contents`;
export const GET_BOOKMARKS =
  '/api/v1/account/webapi/account/profile/getBookmarks';
export const ADD_BOOKMARKS =
  '/api/v1/account/webapi/account/profile/addBookmarks';
export const DEL_BOOKMARKS =
  '/api/v1/account/webapi/account/profile/delBookmarks';
export const annoucementsList = `/api/v1/cms/internal/announcement?adminId=${clientID}`;
export const updateVersion = '/api/v1/cms/internal/lastVersion';
export const messageList = '/api/v1/cms/Message/playerMessages';
export const allResults = '/api/v1/result/service/mobile/results/lastOpen';
export const getHistoryList = '/api/v1/result/service/mobile/results/today';
export const allHistory = '/api/v1/result/service/mobile/results/lastOpen';
export const CURRENT_RESULTS = '/api/v1/result/service/mobile/results/current';
export const currentResultsOnly =
  '/api/v1/result/service/mobile/results/currentOnly';
export const LAST_AND_CURRENT_RESULT =
  '/api/v1/result/service/mobile/results/currentTwo';
export const UNIQUE_GAME_RESULTS = '/api/v1/result/service/mobile/results/hist';
export const uniqueGameHistory = '/api/v1/result/service/mobile/results/hist';
export const getGt = '/api/v1/account/webapi/account/userss/startCaptcha';
export const getValidatePic =
  '/api/v1/account/webapi/account/validateCode/getValidatePic';
export const validatePic =
  '/api/v1/account/webapi/account/validateCode/validatePic';
export const changePwd =
  '/api/v1/account/webapi/account/users/change/encryptPassword';
export const updateRealName =
  '/api/v1/account/webapi/account/users/updateRealName';
export const updateUserInfo = '/api/v1/account/webapi/account/users';
export const createDownline =
  '/api/v1/account/webapi/account/users/createEncryptUser';
export const updateBankInfo =
  '/api/v1/account/webapi/account/users/encryptRegister_info';
export const register = '/api/v1/account/webapi/account/users/register';
export const registerGuest =
  '/api/v1/account/webapi/account/users/registerGuest';
export const webRegisterGuest =
  '/api/v1/account/webapi/account/users/webEncryptRegisterGuest';
export const webRegister =
  '/api/v1/account/webapi/account/users/userWebEncryptRegister';
export const userCheckIn = '/api/v1/account/webapi/operate/users/signIn';
// export const webRegisterGuest =
//   "/api/v1/account/webapi/account/users/webValidateEncryptRegisterGuest";
// export const webRegister =
//   "/api/v1/account/webapi/account/users/userWebValidateEncryptRegister";
export const login = '/api/v1/account/webapi/account/users/login';
// export const WEB_LOGIN = '/api/v1/account/webapi/account/users/webEncryptLogin';
export const WEB_LOGIN = '/api/v1/account/webapi/account/users/encryptLogin';
export const loginHistory = '/api/v1/account/webapi/account/users/loginHistory';
export const userInfo = '/api/v1/account/webapi/account/users/current';
export const userId = '/api/v1/account/webapi/account/users/chekcUserId';
export const logout = '/api/v1/account/account/system/logout';
export const refreshToken = '/api/v1/account/account/system/refreshToken/';
export const preRegisterGuest =
  '/api/v1/account/webapi/account/users/preRegisterGuest';
export const extraRegisterInfos =
  '/api/v1/account/webapi/operate/users/registrySwitchs';

export const userCards = '/api/v1/cashmgt/me/cards';
export const userBankOptions = '/api/v1/cashmgt/me/cards/list';
export const topupGroups = '/api/v1/cashmgt/me/payments/name';
export const bankTransfers =
  '/api/v1/cashmgt/me/transfer/topups/banktransfers/v3';
export const userBanksAccount =
  '/api/v1/cashmgt/me/cards/cardsAndWithdrawDetail';
export const banktransfersQuery =
  '/api/v1/cashmgt/me/transfer/topups/banktransfers/v3';
export const bankList = `/api/v1/cashmgt/me/transfer/topups/banktransfers/banklist/v2/?id=${clientID}`;
export const userWithDraw = '/api/v1/cashmgt/me/transfer/withdrawalsV2';
export const paymentList = '/api/v1/cashmgt/me/transfer/topups/payment/list';
export const transactionHistory = '/api/v1/cashmgt/me/transfer/orderhistory';
export const topups = '/api/v1/cashmgt/me/transfer/topups';

export const ordercap = '/api/v1/ordercap/me/order';
export const cancelOrder = `/api/v1/ordercap/me/cancel`;
export const homeInfo = '/api/v1/cms/internal/pc/31/contents';
export const orderHistory = '/api/v1/orderdata/me/orders/findByState';
export const orderDetail = '/api/v1/orderdata/me/orders/findByTimeuuid';
export const findTopWinners = `/api/v1/orderdata/me/orders/findTopWinners?clientId=${clientID}`;

export const balanceHistory = '/api/v1/balance/me/history';
export const myCashFlow = '/api/v1/balance/me/details';
export const userBalance = '/api/v1/balance/me/balance/details';
export const myCommissions = '/api/v1/balance/me/commissions/';
export const commissionDetail = '/api/v1/balance/me/commissions/details';

export const teamReport = '/api/v1/balance/me/statements/team';
export const teamReportSummary = '/api/v1/balance/me/statements/team/summary';
export const teamReportQuery = '/api/v1/balance/me/statements/team/query';
export const personalReport = '/api/v1/balance/me/statements/user';

export const memberList = '/api/v1/account/webapi/team/users/list';
export const affCodeList = '/api/v1/account/webapi/team/affiliates/list';
export const affCode = '/api/v1/account/webapi/team/affiliates';
export const affCodeUrl = '/api/v1/account/webapi/team/affiliates/affCode';

export const helpList = `/api/v1/cms/internal/helpList/${clientID}`;
export const specialOfferList = `/api/v1/cms/internal/promotion?contentType=PC_PROMOTION&adminId=${clientID}`;
export const trendResult = '/api/v1/result/service/mobile/results/hist/';

export const gameList = '/api/v1/gameinterface/user/showRNGGame';
export const gameLoginUrl = '/api/v1/gameinterface/user/loginurl';
export const providerBalance = '/api/v1/gameinterface/user/walletprovider';
export const reloadProviderBalance =
  '/api/v1/gameinterface/user/wallettransfer';

export const playerBalanceAllBalanceTransferToCenter =
  '/api/v1/dsf/center/player/balance/allBalanceTransferToCenter';
export const playerBalanceTransfer =
  '/api/v1/dsf/center/player/balance/transfer';
export const playerGames = `/api/v1/dsf/center/player/${clientID}/games`;
export const playerGetBetLog = '/api/v1/dsf/center/player/getBetLog';
export const playerGetBalance = '/api/v1/dsf/center/player/getBalance';
export const playerGetTransfer = '/api/v1/dsf/center/player/getTransfer';
export const playerPlatforms = '/api/v1/dsf/center/player/platforms';
export const playerRegister = '/api/v1/dsf/center/player/register';
export const playerStartGame = '/api/v1/dsf/center/player/startGame';
export const playerStartDemoGame = '/api/v1/dsf/center/player/startDemoGame';
export const playerStatementsPersonalList =
  '/api/v1/dsf/center/player/statements/personal/list';
export const playerStatementsPersonalTotal =
  '/api/v1/dsf/center/player/statements/personal/total';
export const playerTeamCalc = '/api/v1/dsf/center/player/teamCalc';
export const playerTeamCalcMy = '/api/v1/dsf/center/player/teamCalc/my';
export const playerTeamCalcMyDay = '/api/v1/dsf/center/player/teamCalc/my/day';
export const playerTeamCalcMyList =
  '/api/v1/dsf/center/player/teamCalc/my/list';
export const playerOpenPlatform = `/api/v1/dsf/center/player/open/platform?clientId=${clientID}`;
export const HbInfos = `/api/v1/balance/me/hb/current/${clientID}`;

export const REGISTRY_SWITCHS =
  '/api/v1/account/webapi/operate/users/registrySwitchs';
export const GET_VALIDATE_PIC =
  '/api/v1/account/webapi/account/validateCode/getValidatePic?webUniqueCode=';
export const CALIBRATE = '/api/v1/account/webapi/account/users/calibrate';
export const PRE_REGISTER_GUEST =
  '/api/v1/account/webapi/account/users/preRegisterGuest';
export const REGISTER_NEW_USER =
  '/api/v1/account/webapi/account/users/registerNewUser';
export const REGISTER_NEW_USER2 =
  '/api/v1/account/webapi/account/users/registerNewUser2';
export const REGISTER_NEW_GUEST =
  '/api/v1/account/webapi/account/users/registerNewGuest';
export const REGISTER_NEW_GUEST2 =
  '/api/v1/account/webapi/account/users/registerNewGuest2';
export const START_CAPTCHA =
  '/api/v1/account/webapi/account/userss/startCaptcha';
