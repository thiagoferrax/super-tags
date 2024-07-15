import React, { useState } from 'react'
import * as Icon from './icon'
import { PlusIcon } from '@heroicons/react/24/outline'
import { Property } from "./property";

export default function ContentProperties() {

    const [propertyList, setPropertyList] = useState<string[]>([])

    const addProperty = (proptype: string) => {
        setPropertyList(propertyList => {
            return [...propertyList, proptype]
        })
    }

    const removeProperty = (index: number) => {
        setPropertyList(propertyList => {
            let newPropertyList = [...propertyList]
            newPropertyList.splice(index, 1)
            return newPropertyList
        })
    }

    const changeProperty = (index: number, newProptype: string) => {
        setPropertyList(propertyList => {
            propertyList[index] = newProptype
            return [...propertyList]
        })
    }

    const propertyListItems = propertyList.map((propertyListItem, index) =>
        <Property proptype={propertyListItem} key={index} index={index} onRemoveProp={removeProperty} onChangeProperty={changeProperty} />
    )

    return (
        <>
            <h2 className="flex text-2xl mb-4">
                <Icon.TitlePropIcon width={29} className="mr-2" />
                Propriedades
            </h2>
            <div className="bg-zinc-900 border-l-4 border-violet-700 p-7">
                {propertyListItems}
                <button className="flex" onClick={() => addProperty("text")}>
                    <PlusIcon className="size-6 text-white text-2sm mr-4" />
                    Adicionar Propriedade
                </button>
            </div>
        </>
    )
}
