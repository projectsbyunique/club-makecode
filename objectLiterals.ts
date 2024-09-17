interface LiteralType {
    id: string;
    image: Image;
    name?: string;
}

interface Floor {
    tilemap: tiles.TileMapData;
    sprite: Sprite;
    spriteTilemapLocation: tiles.Location
    floorInt: number;
}

//% weight=99 color="#FFB836" icon="\uf035"
//% block="Literals"
namespace literals {
    //% block="id $newid name $newname image $newimg"
    //% newimg.shadow=dialog_image_picker
    export function setPlayerData(newid: string, newname: string, newimg: Image): LiteralType {
        const objLiteral = {
            id: newid, 
            name: newname, 
            image: newimg 
        }
        return objLiteral
    }
    //% block="id $newid background image $newimg"
    //% newimg.shadow=dialog_image_picker
    export function setPlayerBackgroundData(newid: string, newimg: Image): LiteralType {
        const objLiteral = { 
            id: newid, 
            image: newimg 
        }
        return objLiteral
    }

    //% block="  $clr"
    //% clr.shadow=colorindexpicker
    //% group="Other"
    export function colorNodeForBlocks(clr: number): number {
        return clr
    }

    //% block="set furniture of $sprite to image $image floor $floor tileC $tileC tileR $tileR || with offset x $x? and y $y?"
    //% floor.defl=0
    //% tileC.defl=0
    //% floorR.defl=0
    //% x.defl=0
    //% y.defl=0
    //% image.shadow=dialog_image_picker
    export function setFurniture(sprite: Sprite, image: Image, floor: number, tileC: number, tileR: number, x?: number, y?: number) {
        sprites.setDataNumber(sprite, "floor", floor)
        sprites.setDataNumber(sprite, "tileW", tileC)
        sprites.setDataNumber(sprite, "tileL", tileR)
        sprites.setDataNumber(sprite, "offsetX", x)
        sprites.setDataNumber(sprite, "offsetY", y)
        sprites.setDataImageValue(sprite, "image", image)
    }
}