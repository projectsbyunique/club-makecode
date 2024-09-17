namespace SpriteKind {
    export const UI = SpriteKind.create()
    export const SpinningEarthSprite = SpriteKind.create()
    export const Store = SpriteKind.create()
    export const Text = SpriteKind.create()
    export const cones_store = SpriteKind.create()
    export const Dialog = SpriteKind.create()
    export const Fader = SpriteKind.create()
    export const Scanlines = SpriteKind.create()
    export const MINI_GAME_PLR = SpriteKind.create()
    export const HomeDecor = SpriteKind.create()
}
function nClrs (image2: Image, list: number[][]) {
    newImg = image2
    for (let value of list) {
        newImg.replace(value[0], value[1])
    }
    return newImg
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (phoneImage) {
        music.play(music.createSoundEffect(WaveShape.Sawtooth, 4313, 0, 255, 0, 75, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        if (menuOpen) {
            menuOpen = false
            sprites.destroy(myMenu3)
            controller.moveSprite(_mainplayer, 70, 70)
        } else {
            controller.moveSprite(_mainplayer, 0, 0)
            menuOpen = true
            myMenu3 = miniMenu.createMenu(
            miniMenu.createMenuItem("Go Home", img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 3 3 . . . . . . . 
                . . . . . 3 3 2 2 3 3 . . . . . 
                . . . 3 3 2 2 2 2 2 2 3 3 . . . 
                . 3 3 2 2 2 2 2 2 2 2 2 2 3 3 . 
                3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 
                a a 2 2 2 2 2 2 2 2 2 2 2 2 a a 
                . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . . 2 2 2 2 2 a a 2 2 2 2 2 . . 
                . . 2 2 2 2 2 . . 2 2 2 2 2 . . 
                . . 2 2 2 2 2 . . 2 2 2 2 2 . . 
                . . a a a a a . . a a a a a . . 
                `),
            miniMenu.createMenuItem("Dial", img`
                . . . . . . . . . . 2 2 . . . . 
                . . . . . . 2 . . . . 2 . . . . 
                . . . . . . 2 . . . . . . 3 . . 
                . . 2 . . . 2 2 2 . . . 3 2 3 . 
                . . 2 . . . . . 2 . . 3 2 2 2 . 
                . . 2 2 2 . . . . . 3 2 2 2 2 3 
                . . . . 2 . . . . 3 2 a 2 2 2 2 
                . . . . . . . . . . a . 2 2 2 2 
                2 . . . . . . . . . . . 2 2 2 2 
                2 2 . . . . 3 . . . . . 2 2 2 2 
                . 2 2 . . 3 2 3 . . . 3 2 2 2 2 
                . . . . 3 2 2 . . . 3 2 2 2 2 a 
                . . . 3 2 2 2 3 3 3 2 2 2 2 a . 
                . . 3 2 2 2 2 2 2 2 2 2 2 a . . 
                . . . a a 2 2 2 2 2 2 2 a . . . 
                . . . . . a a a a a a a . . . . 
                `)
            )
            myMenu3.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Background, 15)
            myMenu3.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 12)
            myMenu3.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 1)
            myMenu3.setPosition(40, 35)
            myMenu3.setFlag(SpriteFlag.RelativeToCamera, true)
            myMenu3.z = 9999999
            myMenu3.onButtonPressed(controller.A, function (selection, selectedIndex) {
                music.play(music.createSoundEffect(WaveShape.Sawtooth, 3072, 2493, 255, 0, 75, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                if (selectedIndex == 0) {
                    sprites.destroy(myMenu3)
                    menuOpen = false
                    timer.background(function () {
                        pause(100)
                        music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 320, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                        transitionOut()
                        music.stopAllSounds()
                        modes.setMode("gotoHouse")
                    })
                } else {
                    controller.moveSprite(_mainplayer, 0, 0)
                    sprites.destroy(myMenu3)
                    list = []
                    for (let value2 of PlayerList) {
                        selectedPlayerImage = value2.image
if (!(value2.name == selectedPlayer.name)) {
                            list.push(miniMenu.createMenuItem(value2.name, selectedPlayerImage))
                        }
                    }
                    myMenu3 = miniMenu.createMenuFromArray(list)
                    myMenu3.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Background, 15)
                    myMenu3.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 12)
                    myMenu3.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 1)
                    myMenu3.setDimensions(100, 100)
                    myMenu3.setPosition(30, 11)
                    myMenu3.setFlag(SpriteFlag.RelativeToCamera, true)
                    myMenu3.z = 9999999
                    if (currentPlayerId == "bon") {
                        myMenu3.setTitle("Who to call?")
                        myMenu3.setFrame(img`
                            .ffffffffffffff...
                            f99999999999999f..
                            fbbbbbbbbbbbbbbf..
                            fbffffffffffffbf..
                            fbffffffffffffbf..
                            fbffffffffffffbf..
                            fbffffffffffffbf..
                            fbffffffffffffbf..
                            fbffffffffffffbf..
                            fbffffffffffffbf..
                            fbffffffffffffbf..
                            fbffffffffffffbf..
                            fbffffffffffffbf..
                            fbbbbbbbbbbbbbbf..
                            fccccccccccccccf..
                            .ffffffffffffff...
                            ..................
                            ..................
                            `)
                        myMenu3.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Foreground, 3)
                    }
                    myMenu3.onButtonPressed(controller.A, function (selection, selectedIndex) {
                        callRecipient = selection
                        controller.moveSprite(_mainplayer, 0, 0)
                        myMenu3.close()
                        selectedPlayer = PlayerList.find(player => player.name === selection);
selectedPlayerImage = selectedPlayer.image
music.play(music.createSoundEffect(WaveShape.Sawtooth, 3072, 2493, 255, 0, 75, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                        showDither()
                        Dialog2(selection, "Hey " + currentPlayerName + "! What's up?")
                        pause(1000)
                        sprites.destroyAllSpritesOfKind(SpriteKind.Dialog)
                        sprites.destroy(ditherOverlay)
                        myMenu4 = miniMenu.createMenu(
                        miniMenu.createMenuItem("Ask to Play Video-Games"),
                        miniMenu.createMenuItem("Ask to Go Racing")
                        )
                        myMenu4.setFlag(SpriteFlag.RelativeToCamera, true)
                        myMenu4.setPosition(1, 78)
                        myMenu4.setDimensions(160, 36)
                        myMenu4.setFrame(img`
                            .ffffffffffffff...
                            f99999999999999f..
                            fbbbbbbbbbbbbbbf..
                            fbffffffffffffbf..
                            fbffffffffffffbf..
                            fbffffffffffffbf..
                            fbffffffffffffbf..
                            fbffffffffffffbf..
                            fbffffffffffffbf..
                            fbffffffffffffbf..
                            fbffffffffffffbf..
                            fbffffffffffffbf..
                            fbffffffffffffbf..
                            fbbbbbbbbbbbbbbf..
                            fccccccccccccccf..
                            .ffffffffffffff...
                            ..................
                            ..................
                            `)
                        myMenu4.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)
                        myMenu4.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Background, 15)
                        myMenu4.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 12)
                        myMenu4.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 1)
                        myMenu4.onButtonPressed(controller.A, function (selection, selectedIndex) {
                            if (selectedIndex == 0) {
                                modes.addMode("playVideoGames")
                                modes.setMode("playVideoGames", callRecipient)
                            } else {
                            	
                            }
                        })
                    })
                }
            })
            if (currentPlayerId == "bon") {
                myMenu3.setTitle("Hi Bon!")
                myMenu3.setFrame(img`
                    .ffffffffffffff...
                    f99999999999999f..
                    fbbbbbbbbbbbbbbf..
                    fbffffffffffffbf..
                    fbffffffffffffbf..
                    fbffffffffffffbf..
                    fbffffffffffffbf..
                    fbffffffffffffbf..
                    fbffffffffffffbf..
                    fbffffffffffffbf..
                    fbffffffffffffbf..
                    fbffffffffffffbf..
                    fbffffffffffffbf..
                    fbbbbbbbbbbbbbbf..
                    fccccccccccccccf..
                    .ffffffffffffff...
                    ..................
                    ..................
                    `)
                myMenu3.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Foreground, 3)
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    timer.background(function () {
        tiles.setTileAt(location, assets.tile`myTile8`)
        pause(500)
        tiles.setTileAt(location, assets.tile`myTile`)
    })
})
modes.whenModeChanged("gotoHouse", function (value) {
    scene.setBackgroundImage(assets.image`myImage21`)
    sprites.destroyAllSpritesOfKind(SpriteKind.cones_store)
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    controller.moveSprite(_mainplayer, 70, 70)
    transitionIn()
    tiles.setCurrentTilemap(floors[0])
    tiles.placeOnRandomTile(_mainplayer, assets.tile`myTile7`)
    for (let value3 of sprites.allOfKind(SpriteKind.HomeDecor)) {
        if (currentFloor == sprites.readDataNumber(value3, "floor")) {
            value3.setImage(sprites.readDataImage(value3, "image"))
            tiles.placeOnTile(value3, tiles.getTileLocation(sprites.readDataNumber(value3, "tileW"), sprites.readDataNumber(value3, "tileL")))
            value3.x += sprites.readDataNumber(value3, "offsetX")
            value3.y += sprites.readDataNumber(value3, "offsetY")
        }
    }
})
function Dialog2 (Label: string, Text: string) {
    DIALOG_LABEL = fancyText.create("")
    DIALOG_TEXT = fancyText.create("")
    fancyText.setColor(DIALOG_LABEL, 4)
    fancyText.setColor(DIALOG_TEXT, 1)
    fancyText.setMaxWidth(DIALOG_TEXT, 132)
    fancyText.setMaxWidth(DIALOG_TEXT, 140)
    DIALOG_LABEL.setKind(SpriteKind.Dialog)
    DIALOG_TEXT.setKind(SpriteKind.Dialog)
    fancyText.setFrame(DIALOG_LABEL, img`
        . f f f f f f f f f f f . . . 
        f f f f f f f f f f f f f . . 
        f f f f f f f f f f f f f . . 
        f f f f f f f f f f f f f . . 
        f f f f f f f f f f f f f . . 
        f f f f f f f f f f f f f . . 
        f f f f f f f f f f f f f . . 
        f f f f f f f f f f f f f . . 
        f f f f f f f f f f f f f . . 
        f f f f f f f f f f f f f . . 
        f f f f f f f f f f f f f . . 
        f f f f f f f f f f f f f . . 
        . f f f f f f f f f f f . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `)
    fancyText.setTextFlag(DIALOG_LABEL, fancyText.Flag.ChangeHeightWhileAnimating, true)
    fancyText.setTextFlag(DIALOG_LABEL, fancyText.Flag.ChangeWidthWhileAnimating, true)
    fancyText.setTextFlag(DIALOG_TEXT, fancyText.Flag.ChangeHeightWhileAnimating, true)
    fancyText.setTextFlag(DIALOG_TEXT, fancyText.Flag.ChangeWidthWhileAnimating, true)
    DIALOG_LABEL.setPosition(10, 88)
    DIALOG_TEXT.setPosition(75, 100)
    DIALOG_LABEL.setFlag(SpriteFlag.RelativeToCamera, true)
    DIALOG_TEXT.setFlag(SpriteFlag.RelativeToCamera, true)
    DIALOG_LABEL.z = 99997
    DIALOG_TEXT.z = 99998
    fancyText.setText(DIALOG_LABEL, Label)
    fancyText.setText(DIALOG_TEXT, Text)
    fancyText.animateAtSpeed(DIALOG_TEXT, fancyText.TextSpeed.VeryFast, fancyText.AnimationPlayMode.UntilDone)
}
modes.whenModeChanged("gotoTown", function (value) {
    transitionIn()
    scene.setBackgroundImage(assets.image`myImage22`)
    if (currentPlayerId == "bon") {
        if (!(_mainplayer)) {
            phoneImage = sprites.create(assets.image`bons_phone`, SpriteKind.UI)
            menuOpen = false
            phoneImage.setFlag(SpriteFlag.RelativeToCamera, true)
            phoneImage.setPosition(144, 104)
            floors = [tilemap`level`, tilemap`level11`]
            _mainplayer = sprites.create(currentPlayerAvatar, SpriteKind.Player)
            _mainplayer.setBounceOnWall(true)
            scene.cameraFollowSprite(_mainplayer)
            controller.moveSprite(_mainplayer, 70, 70)
            characterAnimations.loopFrames(
            _mainplayer,
            assets.animation`bon_Back_Walk`,
            150,
            characterAnimations.rule(Predicate.MovingUp)
            )
            characterAnimations.loopFrames(
            _mainplayer,
            assets.animation`myAnim0`,
            150,
            characterAnimations.rule(Predicate.MovingDown)
            )
            characterAnimations.loopFrames(
            _mainplayer,
            assets.animation`myAnim3`,
            150,
            characterAnimations.rule(Predicate.MovingLeft)
            )
            characterAnimations.loopFrames(
            _mainplayer,
            assets.animation`myAnim2`,
            150,
            characterAnimations.rule(Predicate.MovingRight)
            )
            characterAnimations.runFrames(
            _mainplayer,
            assets.animation`myAnim`,
            200,
            characterAnimations.rule(Predicate.NotMoving)
            )
            declutter.load("Chonkers", sprites.create(img`
                . 
                `, SpriteKind.HomeDecor))
            declutter.load("Television", sprites.create(img`
                . 
                `, SpriteKind.HomeDecor))
            declutter.load("RFCouch", sprites.create(img`
                . 
                `, SpriteKind.HomeDecor))
            declutter.load("LFCouch", sprites.create(img`
                . 
                `, SpriteKind.HomeDecor))
            sprites.setDataBoolean(declutter.get("Television"), "on?", false)
            literals.setFurniture(
            declutter.get("Chonkers"),
            assets.image`myImage46`,
            0,
            23,
            13
            )
            literals.setFurniture(
            declutter.get("Television"),
            assets.image`myImage45`,
            0,
            12,
            9,
            8,
            -8
            )
            literals.setFurniture(
            declutter.get("RFCouch"),
            nClrs(img`
                ..ffff.........
                .fdddbf........
                fbdddbfffffff..
                fbdddbfbdddddf.
                fbdddbfdddddbbf
                fbdddbfbbbbbbbf
                fbdddbffffffbbf
                fbdddbdddddbfff
                fbdddbddddddbf.
                fbdddbddddddbf.
                fbdddbddddddbf.
                fbdddbddddddbf.
                fbdddbddddddbf.
                fbdddbddddddbf.
                fbdddbddddddbf.
                fbddbbddddddbf.
                fbbbbbdfffffff.
                fbbbbbfbdddddf.
                fbbbbbfdddddbbf
                fbbbbbfbbbbbbbf
                fbbbbbfbbbbbbbf
                fbbbbbfbbbbbbbf
                .ffffffffffffff
                .fbbf.....fbbf.
                `, [[literals.colorNodeForBlocks(11), literals.colorNodeForBlocks(10)], [literals.colorNodeForBlocks(13), literals.colorNodeForBlocks(3)]]),
            0,
            11,
            12
            )
            literals.setFurniture(
            declutter.get("LFCouch"),
            fImgH(nClrs(img`
                ..ffff.........
                .fdddbf........
                fbdddbfffffff..
                fbdddbfbdddddf.
                fbdddbfdddddbbf
                fbdddbfbbbbbbbf
                fbdddbffffffbbf
                fbdddbdddddbfff
                fbdddbddddddbf.
                fbdddbddddddbf.
                fbdddbddddddbf.
                fbdddbddddddbf.
                fbdddbddddddbf.
                fbdddbddddddbf.
                fbdddbddddddbf.
                fbddbbddddddbf.
                fbbbbbdfffffff.
                fbbbbbfbdddddf.
                fbbbbbfdddddbbf
                fbbbbbfbbbbbbbf
                fbbbbbfbbbbbbbf
                fbbbbbfbbbbbbbf
                .ffffffffffffff
                .fbbf.....fbbf.
                `, [[literals.colorNodeForBlocks(11), literals.colorNodeForBlocks(10)], [literals.colorNodeForBlocks(13), literals.colorNodeForBlocks(3)]])),
            0,
            14,
            12
            )
        }
    } else if (currentPlayerId == "coneguy") {
        if (!(_mainplayer)) {
            phoneImage = sprites.create(assets.image`cones_phone`, SpriteKind.UI)
            menuOpen = false
            phoneImage.setFlag(SpriteFlag.RelativeToCamera, true)
            phoneImage.setPosition(144, 104)
            floors = [tilemap`level55`]
            _mainplayer = sprites.create(currentPlayerAvatar, SpriteKind.Player)
            scene.cameraFollowSprite(_mainplayer)
            controller.moveSprite(_mainplayer, 70, 70)
        }
    } else {
    	
    }
    tiles.setCurrentTilemap(tilemap`world`)
    _mainplayer.z = 9999
    ConesStore = sprites.create(assets.image`cones_storefront_open`, SpriteKind.cones_store)
    tiles.placeOnTile(ConesStore, tiles.getTileLocation(8, 13))
    ConesStore.x += -6
    ConesStore.y += 9
    tiles.placeOnTile(_mainplayer, tiles.getTileLocation(33, 43))
    music.play(music.createSong(hex`0078000408020203001c0001dc00690000045e01000400000000000000000000056400010400033c000000080001240c001000012010001800012418001c00012720002400012424002800012028002c00011d2c003400012438003c0001203c004000011b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80036000000010001110800090001121400150001111800190001122400250001112800290001123400350001113800390001123c003d000111`), music.PlaybackMode.LoopingInBackground)
})
function transitionIn () {
    timer.background(function () {
        for (let index2 = 0; index2 <= 32; index2++) {
            spriteutils.fillCircle(
            transititon.image,
            80,
            60,
            index2 * 5,
            0
            )
pause(10)
        }
    })
}
function showDither () {
    ditherOverlay = sprites.create(assets.image`myImage30`, SpriteKind.UI)
    ditherOverlay.setPosition(80, 120)
    ditherOverlay.setFlag(SpriteFlag.RelativeToCamera, true)
    ditherOverlay.z = 99996
    for (let index = 0; index <= 19; index++) {
        ditherOverlay.y += -3
        pause(10)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    controller.moveSprite(_mainplayer, 0, 0)
    myMenu2 = miniMenu.createMenu(
    miniMenu.createMenuItem("Up", img`
        . . . . . 3 . . . . . 
        . . . . 3 2 3 . . . . 
        . . . 3 2 2 2 3 . . . 
        . . 3 2 2 2 2 2 3 . . 
        . 3 2 2 2 2 2 2 2 3 . 
        3 2 2 2 2 2 2 2 2 2 3 
        a a a a a a a a a a a 
        `),
    miniMenu.createMenuItem("Down", img`
        3 3 3 3 3 3 3 3 3 3 3 
        a 2 2 2 2 2 2 2 2 2 a 
        . a 2 2 2 2 2 2 2 a . 
        . . a 2 2 2 2 2 a . . 
        . . . a 2 2 2 a . . . 
        . . . . a 2 a . . . . 
        . . . . . a . . . . . 
        `),
    miniMenu.createMenuItem("", img`
        . . 3 3 . . . 3 3 . . 
        . . 2 2 3 . 3 2 2 . . 
        . . . 2 2 2 2 2 . . . 
        . . . . 2 2 2 . . . . 
        . . . 2 2 2 2 2 . . . 
        . . 2 2 a . a 2 2 . . 
        . . a a . . . a a . . 
        `)
    )
    myMenu2.setPosition(50, 70)
    myMenu2.setFlag(SpriteFlag.RelativeToCamera, true)
    myMenu2.setFrame(img`
        ..bbbbbbbbbbbbbbbbbbbb..
        .bd111111111111111111db.
        bd1dbbbbbbbbbbbbbbbbd1db
        b1dbbbbbbbbbbbbbbbbbbd1b
        b1bd1111111111111111db1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1bd1111111111111111db1b
        bd1bbbbbbbbbbbbbbbbbb1db
        bbd111111111111111111dbb
        .bbbbbbbbbbbbbbbbbbbbbb.
        ..bbbbbbbbbbbbbbbbbbbb..
        `)
    myMenu2.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.IconOnly, 1)
    myMenu2.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 4)
    myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 1)
    myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 30)
    myMenu2.onSelectionChanged(function (selection, selectedIndex) {
        music.play(music.createSoundEffect(WaveShape.Sine, 1169, 1169, 255, 255, 50, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    })
    myMenu2.onButtonPressed(controller.A, function (selection, selectedIndex) {
        // Up
        if (selectedIndex == 0) {
            if (currentFloor + 1 < floors.length) {
                console.log(currentFloor)
                myMenu2.close()
                color.startFadeFromCurrent(color.Black, 300)
                color.pauseUntilFadeDone()
                tiles.placeOnRandomTile(_mainplayer, assets.tile`transparency16`)
                tiles.setTileAt(location, assets.tile`myTile36`)
                tiles.replaceAllTiles(assets.tile`myTile8`, assets.tile`myTile`)
                tiles.setCurrentTilemap(floors[currentFloor + 1])
                tiles.placeOnTile(_mainplayer, tiles.getTileLocation(tiles.getTilesByType(assets.tile`myTile36`)[0].column, tiles.getTilesByType(assets.tile`myTile36`)[0].row + 2))
                controller.moveSprite(_mainplayer, 70, 70)
                color.startFadeFromCurrent(color.originalPalette, 300)
                currentFloor += 1
                for (let value32 of sprites.allOfKind(SpriteKind.HomeDecor)) {
                    animation.stopAnimation(animation.AnimationTypes.All, value32)
                    value32.setImage(img`
                        . 
                        `)
                }
                for (let value33 of sprites.allOfKind(SpriteKind.HomeDecor)) {
                    if (currentFloor == sprites.readDataNumber(value33, "floor")) {
                        value33.setImage(sprites.readDataImage(value33, "image"))
                        tiles.placeOnTile(value33, tiles.getTileLocation(sprites.readDataNumber(value33, "tileW"), sprites.readDataNumber(value33, "tileL")))
                        value33.x += sprites.readDataNumber(value33, "offsetX")
                        value33.y += sprites.readDataNumber(value33, "offsetY")
                    }
                }
            } else {
                music.play(music.createSong(hex`0078000408010105001c000f0a006400f4010a00000400000000000000000000000000000000020c00000001000114020003000114`), music.PlaybackMode.InBackground)
                _mainplayer.sayText(NegativeRemarks[randint(0, NegativeRemarks.length - 1)], 2000, true)
            }
        } else if (selectedIndex == 1) {
            if (currentFloor - 1 > -1) {
                console.log(currentFloor)
                myMenu2.close()
                color.startFadeFromCurrent(color.Black, 300)
                color.pauseUntilFadeDone()
                tiles.placeOnRandomTile(_mainplayer, assets.tile`transparency16`)
                tiles.setTileAt(location, assets.tile`myTile36`)
                tiles.replaceAllTiles(assets.tile`myTile8`, assets.tile`myTile`)
                tiles.setCurrentTilemap(floors[currentFloor - 1])
                tiles.placeOnTile(_mainplayer, tiles.getTileLocation(tiles.getTilesByType(assets.tile`myTile36`)[0].column, tiles.getTilesByType(assets.tile`myTile36`)[0].row + 2))
                controller.moveSprite(_mainplayer, 70, 70)
                color.startFadeFromCurrent(color.originalPalette, 300)
                currentFloor += -1
                for (let value34 of sprites.allOfKind(SpriteKind.HomeDecor)) {
                    value34.setImage(img`
                        . 
                        `)
                }
                for (let value35 of sprites.allOfKind(SpriteKind.HomeDecor)) {
                    if (currentFloor == sprites.readDataNumber(value35, "floor")) {
                        value35.setImage(sprites.readDataImage(value35, "image"))
                        tiles.placeOnTile(value35, tiles.getTileLocation(sprites.readDataNumber(value35, "tileW"), sprites.readDataNumber(value35, "tileL")))
                        value35.x += sprites.readDataNumber(value35, "offsetX")
                        value35.y += sprites.readDataNumber(value35, "offsetY")
                    }
                }
            } else {
                music.play(music.createSong(hex`0078000408010105001c000f0a006400f4010a00000400000000000000000000000000000000020c00000001000114020003000114`), music.PlaybackMode.InBackground)
                _mainplayer.sayText(NegativeRemarks[randint(0, NegativeRemarks.length - 1)], 2000, true)
            }
        } else {
            _mainplayer.y += 4
            tiles.setTileAt(location, assets.tile`myTile36`)
            myMenu2.close()
            controller.moveSprite(_mainplayer, 70, 70)
        }
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile66`, function (sprite, location) {
    if (game.ask("Do you want to exit?", "(Go to town)")) {
        tiles.placeOnTile(_mainplayer, tiles.getTileLocation(location.column, location.row - 2))
        timer.background(function () {
            transitionOut()
            modes.setMode("gotoTown")
        })
    } else {
        tiles.placeOnTile(_mainplayer, tiles.getTileLocation(location.column, location.row - 2))
    }
})
function create_scanlines_of_image (preimage: Image) {
    darkerShades = [
    0,
    9,
    10,
    2,
    14,
    4,
    15,
    5,
    6,
    12,
    15,
    12,
    15,
    12,
    15
    ]
    image2 = preimage.clone()
    int += 1
    if (int > 10) {
        int = 1
    }
    scanlineY = int
    for (let index = 0; index < 16; index++) {
        for (let index6 = 0; index6 <= 160; index6++) {
            clr1 = image.screenImage().clone().getPixel(index6, scanlineY)
            image2.setPixel(index6, scanlineY, darkerShades[clr1])
        }
        scanlineY += 10
    }
    return image2
}
function fImgH (myImage: Image) {
    myImage.flipX()
    return myImage
}
function loadMinigameHUD () {
    PLR_1_INDI = sprites.create(assets.image`PLAYER1`, SpriteKind.UI)
    PLR_2_INDI = sprites.create(assets.image`PLAYER2`, SpriteKind.UI)
    PLR1_CAR = sprites.create(assets.image`myImage33`, SpriteKind.MINI_GAME_PLR)
    PLR2_CAR = sprites.create(assets.image`myImage34`, SpriteKind.MINI_GAME_PLR)
    PLR_1_INDI.setFlag(SpriteFlag.RelativeToCamera, true)
    PLR_2_INDI.setFlag(SpriteFlag.RelativeToCamera, true)
    PLR1_CAR.setFlag(SpriteFlag.RelativeToCamera, true)
    PLR2_CAR.setFlag(SpriteFlag.RelativeToCamera, true)
    PLR_1_INDI.setPosition(17, 91)
    PLR_2_INDI.setPosition(143, 91)
    PLR1_CAR.setPosition(40, 75)
    PLR2_CAR.setPosition(120, 120)
    pause(500)
    spriteutils.moveTo(PLR2_CAR, spriteutils.pos(120, 75), 1000, true)
    controller.moveSprite(PLR1_CAR)
}
modes.whenModeChanged("conesStore", function (value) {
    if (currentPlayerId == "coneguy") {
    	
    } else {
        transitionIn()
        tiles.setCurrentTilemap(tilemap`level44`)
        tiles.placeOnRandomTile(_mainplayer, assets.tile`myTile7`)
    }
})
modes.whenModeChanged("characterSelect", function (value) {
    color.startFade(color.Black, color.originalPalette, 300)
    scroller.scrollBackgroundWithSpeed(0, -10)
    currentPlayerAvatar = img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    myMenu = miniMenu.createMenuFromArray([
    miniMenu.createMenuItem("Bon", assets.image`myImage6`),
    miniMenu.createMenuItem("Cone-Guy", assets.image`myImage7`),
    miniMenu.createMenuItem("Doodle", assets.image`myImage8`),
    miniMenu.createMenuItem("Taser", assets.image`myImage28`),
    miniMenu.createMenuItem("Blast", assets.image`myImage26`),
    miniMenu.createMenuItem("Dragondoodle", assets.image`myImage31`)
    ])
    bg = sprites.create(assets.image`myImage19`, SpriteKind.UI)
    myMenu.setPosition(11, 11)
    bg.x = 105
    myMenu.setFrame(img`
        ..bbbbbbbbbbbbbbbbbbbb..
        .bd111111111111111111db.
        bd1dbbbbbbbbbbbbbbbbd1db
        b1dbbbbbbbbbbbbbbbbbbd1b
        b1bd1111111111111111db1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1bd1111111111111111db1b
        bd1bbbbbbbbbbbbbbbbbb1db
        bbd111111111111111111dbb
        .bbbbbbbbbbbbbbbbbbbbbb.
        ..bbbbbbbbbbbbbbbbbbbb..
        `)
    myMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.IconOnly, 1)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 4)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 100)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)
    bio = fancyText.create("abc", 80, 15)
    bio.setKind(SpriteKind.Text)
    bio.setPosition(108, 21)
    myMenu.onSelectionChanged(function (selection, selectedIndex) {
        selectedPlayer = PlayerList.find(player => player.name === selection);
let selectedBackground = Backgrounds.find(background => background.id === selectedPlayer.id);
selectedPlayerImage = selectedPlayer.image
if (selectedPlayer) {
            if (selectedBackground) {
                bioString = ""
                currentSelectionBIO = CharcterBios[selectedIndex]
                console.log(CharcterBios[selectedIndex])
                let currentBg = selectedBackground.image
currentPlayerName = selectedPlayer.name
scene.setBackgroundImage(currentBg)
                for (let index22 = 0; index22 <= currentSelectionBIO.length - 1; index22++) {
                    prvBioStrng = currentSelectionBIO[index22]
                    console.log(prvBioStrng)
                    if (bioString == "") {
                        bioString = prvBioStrng
                    } else {
                        bioString = "" + bioString + "\\n-" + prvBioStrng
                    }
                    fancyText.setText(bio, bioString)
                    fancyText.setAnimationSound(bio, music.createSoundEffect(WaveShape.Triangle, 656, 0, 255, 0, 30, SoundExpressionEffect.None, InterpolationCurve.Linear))
                    fancyText.animateAtSpeed(bio, fancyText.TextSpeed.VeryFast, fancyText.AnimationPlayMode.InBackground)
                }
            }
        }
        music.play(music.createSoundEffect(WaveShape.Sine, 1169, 1169, 255, 255, 50, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    })
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        let selectedPlayer2 = PlayerList.find(player => player.name === selection);
if (selectedPlayer2) {
            currentPlayerAvatar = selectedPlayer2.image
currentPlayerName = selectedPlayer2.name
currentPlayerId = selectedPlayer2.id
music.play(music.createSong(hex`0078000408010300001c00010a006400f4016400000400000000000000000000000000050000040c0000000200012002000400012703001c0001dc00690000045e0100040000000000000000000005640001040003120008000c0001200c001000012410001400012706001c00010a006400f4016400000400000000000000000000000000000000021200000001000120010002000124020003000127`), music.PlaybackMode.UntilDone)
            transitionOut()
            myMenu.close()
            sprites.destroy(bg)
            modes.setMode("gotoTown")
        }
    })
})
function transitionOut () {
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 320, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    transititon = sprites.create(image.screenImage().clone(), SpriteKind.Fader)
    transititon.z = 99999999999
    transititon.setPosition(80, 60)
    transititon.setFlag(SpriteFlag.RelativeToCamera, true)
    for (let index32 = 0; index32 <= 32; index32++) {
        transititon.image.fill(15)
        spriteutils.fillCircle(
        transititon.image,
        80,
        60,
        160 - index32 * 5,
        0
        )
pause(10)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.cones_store, function (sprite, otherSprite) {
    if (debounce == 0) {
        controller.moveSprite(_mainplayer, 0, 0)
        debounce = 1
        spriteutils.moveToAtSpeed(_mainplayer, spriteutils.pos(_mainplayer.x, _mainplayer.x - 16), 70)
        music.play(music.createSoundEffect(WaveShape.Sine, 1494, 0, 255, 0, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        transitionOut()
        modes.setMode("conesStore")
    }
})
function capitalizeString (str: string) {
    if (str.length == 0) {
        // Return an empty string as is
        return str
    } else {
        return str.toUpperCase()
    }
}
modes.whenModeChanged("playVideoGames", function (value) {
    console.log(value)
    timer.background(function () {
        transitionOut()
        myMenu4.close()
        myTextSprite = fancyText.create("vs. " + capitalizeString(value), 0)
        fancyText.setFont(myTextSprite, fancyText.italic_small)
        myTextSprite.setPosition(80, 47)
        myTextSprite.setFlag(SpriteFlag.RelativeToCamera, true)
        difInd = sprites.create(img`
            .717............................
            71717.11..111.111.1...1..11.1...
            71117.1.1.1.1.11..11.11.1.1.1...
            71717.1.1.111.1.1.1.1.1.111.111.
            .171............................
            ................................
            .112............................
            21212.1.1..11.111.11............
            21112.111.1.1.11..1.1...........
            21212.1.1.111.1.1.11............
            .112............................
            `, SpriteKind.UI)
        difInd.setPosition(80, 58)
        difInd.z = transititon.z + 1
        difInd.setFlag(SpriteFlag.RelativeToCamera, true)
        myTextSprite.z = transititon.z + 2
        pauseUntil(() => controller.A.isPressed() || controller.B.isPressed())
        transitionIn()
        if (currentPlayerId == "bon") {
            sprites.destroy(myTextSprite)
            sprites.destroyAllSpritesOfKind(SpriteKind.cones_store)
            sprites.destroyAllSpritesOfKind(SpriteKind.UI)
            tiles.setCurrentTilemap(tilemap`level46`)
            scene.setBackgroundImage(img`
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666661166166111666666111616611166116616661666166666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666661166161666166661666616166666116616616166166666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666661616161666166661116616166666161616616166166666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666661661161666166666661616166116166116111116166666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666661661161666166666661616166616166116166616166666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666661666166111666661116616611166166616166616111166666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                `)
            enable_scanlines = true
            scroller.scrollBackgroundWithSpeed(0, 0)
            scroller.setBackgroundScrollOffset(0, 0)
            TVOverlay = sprites.create(img`
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccc
                ccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9cccccc
                ccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99cccccc
                ccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccffff............................................................................................................................................9999cccccc
                ccccccfff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999cccccc
                ccccccff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999cccccc
                ccccccf999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999cccccc
                cccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999cccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccaaacccccccccc9cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccaa2aac9c9c99cccc999cc9cc99cc111111111111c11ccccccccccc11ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccca232ac9c9c9c9c9c9c9c9c9c9c9cccccc11cccccccc1111ccc1111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccaa2aacc99c9c9c9cc99cc9cc9c9cccccc11cccccccccccc111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccaaacccccccccccccc9cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccc11cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccc2222222222222cc11cc11cc1111cccccc1111ccc1111ccc1111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccc2222211122222cc11cc11c111111c11c11cc11c11cc11c111111ccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffffffffffffffffffffcccccc
                ccc2221111119222cc111111c11cc11c11c11cc11c11cc11c11cc11ccccfffff9ccf2fcfcccccfcfffffffffffffffffffffffffffffffffffffff9fcc9ffff9ccccfcccccccccccccccccccc9cccccc
                ccccc1111191c9ccccc1111cc11cc11c11cc11111cc1111cc11cc11ccccfff9fffff2f9ffff99f9f666666666666666666666666666666666666669fffff9ff9ccccfc5544545cccccccccccc9cccccc
                ccc44119191c9c44ccccccccccccccccccccccc11ccccccccccccccccccff9ffffff2f1ffff11f1f666111166636666666666666666666661666669ffffff9f9ccccfc5fffff4cccccccccccc9cccccc
                ccc4111191c9ccc4ccccccccccccccccccccccc1cccccccccccccccccccfffffffffcf1f11111f1f881911118323888888888888888881111918889ffffffff9ccccfc45f5f45cccccccccccc9cccccc
                ccc41191919cccc4ccccc55554cc11cc1c111ccccccccccccccccccccccf9ffffffc4f1f1111ff1f888899111322388888888888888811999188889fffffff99ccccfc4fffff4cccccccccccc9cccccc
                ccc411919cc9ccc4cccc554cc54c1c1c1cc1cccccccccccccccccccccccfcffffccc4f1fffffff1f888888883222238888888888888888888199889fffffffc9ccccfcc445455cccccccccccc9cccccc
                ccccc199c9cccccccccc54ccc54c11cc1cc1cccccccccccccccccccccccfcffffccc4f111111111f666666663212223611166616161616166666669fffffffc9ccccfcccccccccccccccccccc9cccccc
                ccc5491c9ccccc45cccc54ccc54c1c1c1cc1cccccccccccccccccccccccfccffcccf4fcccccccccf888888811111112381818181888881888888889fffcffcc9ccccfcccccccccccccccccccc9cccccc
                ccc5549cccccc455cccc54ccc54c11cc1cc1cccccccccccccccccccccccfffcfcfffcf999999999f888888832212222218118181888118888888889fffffcff9ccccfcccccccccccccccccccc9cccccc
                ccc55444ccc44455ccccc55c554ccccccccccccccccccccccccccccccccfffffffff5fcccccccccf666666321111122223666666666666666666669ffffffff9ccccfffffffffffffffffffff9cccccc
                ccc5554444444555ccc5545554cccccccccccccccccccccccccccccccccfcfffffff5f111111111f888883221111122222381111111111188888889fffffffc9ccccfcccccccccccccccccccc9cccccc
                ccc5555544455555cc554ccc5ccccccccccccccccccccccccccccccccccfffcfffff5fffffffffff66666322221222222aa66666666666666666669fffffcff9ccccfcccccccccccccccccccc9cccccc
                ccc5555fffff5555cc54cccc54cccccccccccccccccccccccccccccccccfffffffff5fffffffffff55553221111111aaacc1cccc555555555555559ffffffff9ccccfcccccccccccccccccccc9cccccc
                ccc555fff5fff555cc54cccc54cccccccccccccccccccccccccccccccccffcffffff5fff11111fff77773222221aaaccccccccccc77777777777779ffffffcf9ccccfcccccccccccccccccccc9cccccc
                ccc55fff5f5fff55cc54cccc54cccccccccccccccccccccccccccccccccfffffffffcff111f111ff77732222aaa7ccccccc1cccccc7777777777779ffffffff9ccccfcccccccccccccccccccc9cccccc
                ccc55ff5fff5ff55cc54ccc54ccccccccccccccccccccccccccccccccccfffffffffcf111f1f111f77732aaa777cccccccccccccccc777777777779ffffffff9ccccfcccccccccccccccccccc9cccccc
                ccc5555555555555ccc55554cccccccccccccccccccccccccccccccccccfffffffffcf11f111f11f777aa77777ccccccccc1cccccccc77777777779ffffffff9ccccfcccccccccccccccccccc9cccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffcfffffffffff777777777cccccccccc1ccccccccc777777777cffffffff9ccccfcccccccccccccccccccc9cccccc
                ccc1c1c111c1c111cccccccccccccccccccccccccccccccccccccccccccfffffffffcfffffffffff66666666fffffffffffcffffffffff66666666cffffffff9ccccfcccccccccccccccccccc9cccccc
                ccc111c1c1c1c111ccccccccccccccccccccccccccccccccccccccccccc999999999999999999999999999999999999999999999999999999999999999999999cccc9999999999999999999999cccccc
                ccccccccccccccc1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                `, SpriteKind.UI)
            TVOverlay.z = 100000000000000000
            TVOverlay.setFlag(SpriteFlag.RelativeToCamera, true)
            TVOverlay.y += -20
            pause(2000)
            scroller.scrollBackgroundWithSpeed(0, 75)
            for (let index = 0; index < 20; index++) {
                TVOverlay.y += 2
                pause(25)
            }
            scroller.scrollBackgroundWithSpeed(0, 0)
            pause(500)
            enable_scanlines = false
            sprites.destroy(_scanlines)
            scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`myImage0`)
            scroller.scrollBackgroundWithSpeed(0, 200)
            loadMinigameHUD()
        }
    })
})
let A_Indicator: Sprite = null
let TVOverlay: Sprite = null
let enable_scanlines = false
let difInd: Sprite = null
let myTextSprite: fancyText.TextSprite = null
let debounce = 0
let prvBioStrng = ""
let currentSelectionBIO: string[] = []
let bioString = ""
let bio: fancyText.TextSprite = null
let bg: Sprite = null
let myMenu: miniMenu.MenuSprite = null
let PLR2_CAR: Sprite = null
let PLR1_CAR: Sprite = null
let PLR_2_INDI: Sprite = null
let PLR_1_INDI: Sprite = null
let clr1 = 0
let scanlineY = 0
let int = 0
let image2: Image = null
let darkerShades: number[] = []
let myMenu2: miniMenu.MenuSprite = null
let ConesStore: Sprite = null
let DIALOG_TEXT: fancyText.TextSprite = null
let DIALOG_LABEL: fancyText.TextSprite = null
let currentFloor = 0
let floors: tiles.TileMapData[] = []
let myMenu4: miniMenu.MenuSprite = null
let ditherOverlay: Sprite = null
let callRecipient = ""
let list: miniMenu.MenuItem[] = []
let _mainplayer: Sprite = null
let myMenu3: miniMenu.MenuSprite = null
let menuOpen = false
let phoneImage: Sprite = null
let newImg: Image = null
let _scanlines: Sprite = null
let CharcterBios: string[][] = []
let NegativeRemarks: string[] = []
let selectedPlayerImage: Image = null
let transititon: Sprite = null
let currentPlayerId = ""
let currentPlayerName = ""
let currentPlayerAvatar: Image = null
let newstr = 0
let A_indicator_debounce = false
let decoy: any[] = []
let PlayerList: LiteralType[] = []
let selectedPlayer: LiteralType = null
console.log(typeof decoy)
console.log("")
PlayerList = [
literals.setPlayerData("bon", "Bon", assets.image`myImage6`),
literals.setPlayerData("coneguy", "Cone-Guy", assets.image`myImage7`),
literals.setPlayerData("doodle", "Doodle", assets.image`myImage8`),
literals.setPlayerData("taser", "Taser", assets.image`myImage28`),
literals.setPlayerData("blast", "Blast", assets.image`myImage26`),
literals.setPlayerData("dragondoodle", "Dragondoodle", assets.image`myImage31`)
]
let Backgrounds = [
literals.setPlayerBackgroundData("bon", assets.image`myImage11`),
literals.setPlayerBackgroundData("coneguy", assets.image`myImage9`),
literals.setPlayerBackgroundData("doodle", assets.image`myImage17`),
literals.setPlayerBackgroundData("taser", assets.image`myImage24`),
literals.setPlayerBackgroundData("blast", assets.image`myImage14`),
literals.setPlayerBackgroundData("dragondoodle", assets.image`myImage13`)
]
NegativeRemarks = [
"That's not going to work.",
"I don't think that exists.",
"Uh uh.",
"Maybe try the OTHER option.",
"Nope.",
"That doesn't exist :("
]
CharcterBios = [
[
"BON",
"1 Canine Ave",
"Has ALOT of cats",
"Mac Demarco Stan",
"Likes Korn lol."
],
[
"CONE-GUY",
"2 Canine Ave",
"Loves Drawing & M3M3Z",
"I wonder what he thinks about cones..."
],
[
"DOODLE",
"3 Canine Ave",
"A pencil addict with a hope active mood.",
"funi pixel guy"
],
["TASER", "1 Arcade Lane", "Just a mysterious guy whose skin is supercharged with electricity."],
[
"BLAST",
"2 Arcade Lane",
"LOVES boxes",
"Can spontaneously make boxes ",
"Likes geometrical shapes"
],
["DRAGONDOOD-LE", "They maintain playful, childlike qualities from their plastic ring days."]
]
_scanlines = sprites.create(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `, SpriteKind.Scanlines)
_scanlines.setFlag(SpriteFlag.RelativeToCamera, true)
modes.addMode("characterSelect")
modes.addMode("gotoTown")
modes.addMode("conesStore")
modes.addMode("gotoHouse")
modes.setMode("characterSelect")
game.onUpdate(function () {
    if (declutter.contains("Television")) {
        if (declutter.get("Television").image.width != 1) {
            if (spriteutils.distanceBetween(_mainplayer, declutter.get("Television")) <= 41) {
                if (A_Indicator == spriteutils.nullConsts(spriteutils.NullConsts.Undefined) || spriteutils.isDestroyed(A_Indicator)) {
                    A_Indicator = sprites.create(assets.image`myImage48`, SpriteKind.UI)
                }
                A_Indicator.setScale((100 + (41 - spriteutils.distanceBetween(_mainplayer, declutter.get("Television"))) * 2) / 100, ScaleAnchor.Middle)
                A_Indicator.setPosition(declutter.get("Television").x, declutter.get("Television").y)
                if (controller.A.isPressed() && !(A_indicator_debounce)) {
                    console.log("AAAAAA")
                    A_indicator_debounce = true
                    if (sprites.readDataBoolean(declutter.get("Television"), "on?")) {
                        sprites.setDataBoolean(declutter.get("Television"), "on?", false)
                        console.log(sprites.readDataBoolean(declutter.get("Television"), "on?"))
                        animation.stopAnimation(animation.AnimationTypes.All, declutter.get("Television"))
                        declutter.get("Television").setImage(assets.image`myImage45`)
                        timer.after(1000, function () {
                            A_indicator_debounce = false
                        })
                    } else {
                        sprites.setDataBoolean(declutter.get("Television"), "on?", true)
                        animation.runImageAnimation(
                        declutter.get("Television"),
                        assets.animation`10_per_img_buckaroo`,
                        200,
                        true
                        )
                        timer.after(1000, function () {
                            A_indicator_debounce = false
                        })
                    }
                }
            } else {
                sprites.destroy(A_Indicator)
            }
        }
    }
})
game.onUpdate(function () {
	
})
game.onUpdate(function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile67`)) {
        if (tiles.getTilesByType(assets.tile`myTile67`).length != 0) {
            if (Math.sqrt((_mainplayer.x - value.x) ** 2 + (_mainplayer.y - value.y) ** 2) <= 35) {
                if (A_Indicator == spriteutils.nullConsts(spriteutils.NullConsts.Undefined) || spriteutils.isDestroyed(A_Indicator)) {
                    A_Indicator = sprites.create(assets.image`myImage48`, SpriteKind.UI)
                }
                A_Indicator.setScale(1, ScaleAnchor.Middle)
                A_Indicator.setPosition(value.x, value.y)
                if (controller.A.isPressed() && !(A_indicator_debounce)) {
                    console.log("AAAAAA")
                    A_indicator_debounce = true
                }
            } else {
                sprites.destroy(A_Indicator)
            }
        }
    }
})
game.onUpdateInterval(100, function () {
    if (enable_scanlines) {
        _scanlines.setImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        _scanlines.setImage(create_scanlines_of_image(_scanlines.image.clone()))
    }
})
