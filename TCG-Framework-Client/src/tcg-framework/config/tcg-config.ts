/*      TRADING CARD GAME - CONFIG
    this contains the overhead enums, settings, and configuration of the TCG
    framework. this includes the networking mode, standardized card
    sets, and more

    PrimaryAuthors: TheCryptoTrader69 (Alex Pazder)
    TeamContact: thecryptotrader69@gmail.com
*/

/** all possible connectivity/load states for a player */
export enum PLAYER_CONNECTIVITY_STATE {
    UNINITIALIZED, //no attempt has been made to load player data
    CONNECTING, //actively attempting connection
    CONNECTED, //successfully established connection 
    FAILED, //failed to establish connection (likely guest wallet)
}

/** all possible account types for a player */
export enum PLAYER_ACCOUNT_TYPE {
    UNINITIALIZED, //player's account has not loaded yet
    GUEST, //guest/not logged in with a wallet
    STANDARD, //logged in with a web3 wallet
    PREMIUM, //logged in and confirmed to own cards
}

/** all connectivity types for the scene */
export enum SCENE_CONNECTIVITY_TYPE {
    //full server experience, with mechanics mirroring/anti-cheat
    //  player can level-up
    SERVER_MIRRORED, 
    //initial connection to server to load account, but no anti-cheat
    //  player cannot level-up
    SERVER_ACCOUNTS,
    //no account or ownership verification, locks the scene as though
    //  it was the player was playing on a demo account 
    PEER_TO_PEER_LOCKED,
    //no account or ownership verification, enables all functions/deck
    //  options in the game as if player was logged in on an admin account
    PEER_TO_PEER_SANDBOX,
}

/** determines all possible card owners */
export enum CARD_OBJECT_OWNER_TYPE {
    GAME_TABLE_HAND = 0, //used by an active game table
    GAME_TABLE_DECK = 1, //
    DECK_MANAGER = 2, //used by deck manager
    SHOWCASE = 3, //set on display in scene
}

/** all possible game states for a card table */
export enum TABLE_GAME_STATE {
    IDLE, //no game has started
    ACTIVE, //game is on-going
    OVER, //game has finished (displaying results)
} 

/** team types for table/who can register for table */
export enum TABLE_TEAM_TYPE {
    HUMAN, //human player
    AI, //AI/PvE player
}

/** table team's turn state */
export enum TABLE_TURN_TYPE {
    ACTIVE,
    INACTIVE,
}