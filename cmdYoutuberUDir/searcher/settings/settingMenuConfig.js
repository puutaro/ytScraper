
name="Install"
|icon=puzzle
|acVar=runInstall
    ?importPath=
        `${cmdYoutuberSearcherInstallActionsPath}`,

name="Setting mode"
|icon=setting
|acVar=runToConfigState
    ?importPath=
        `${cmdYoutuberChangeStateAction}`
    ?replace=
        STATE=`${CONFIG}`
        &ENABLE_ADD_TO_BACKSTACK=ON,

