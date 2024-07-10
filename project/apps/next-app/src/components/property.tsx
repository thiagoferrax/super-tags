import * as Icon from './icon'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

interface PropertyProps {
    proptype: string;
    index: number;
    onRemoveProp: (index: number) => void;
    onChangeProperty: (index: number, newProptype: string) => void;
}

export const Property = ({ proptype, index, onRemoveProp, onChangeProperty }: PropertyProps) => {
    const propertyMenu = () => {
        return (
            <ul tabIndex={0} className="dropdown-content menu z-1 top-7 bg-base-100 w-60 p-0 shadow border border-neutral-600 rounded-md">
                <li className="dropdown dropdown-right">
                    <a tabIndex={1} role="button">
                        <Icon.ChangePropIcon width={24} />
                        Tipo de Propriedade
                        <ChevronRightIcon className="size-5 text-white" />
                    </a>
                    <ul tabIndex={1} className="dropdown-content menu z-2 bg-base-100 w-60 p-0 shadow border border-neutral-600 rounded-md">
                        <li>
                            <a onClick={() => {
                                onChangeProperty(index, 'text')
                            }}>
                                <Icon.TextPropIcon width={24} className="mr-2" />
                                Textos
                            </a>
                        </li>
                        <li>
                            <a onClick={() => onChangeProperty(index, 'interger')}>
                                <Icon.IntegerPropIcon width={24} className="mr-2" />
                                Inteiro
                            </a>
                        </li>
                        <li>
                            <a onClick={() => onChangeProperty(index, 'real')}>
                                <Icon.RealPropIcon width={24} className="mr-2" />
                                Real
                            </a>
                        </li>
                        <li>
                            <a onClick={() => onChangeProperty(index, 'check')}>
                                <Icon.CheckboxPropIcon width={24} className="mr-2" />
                                Checkbox
                            </a>
                        </li>
                        <li>
                            <a onClick={() => onChangeProperty(index, 'date')}>
                                <Icon.DatePropIcon width={24} className="mr-2" />
                                Data
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="text-orange-700 border-t border-neutral-600">
                    <a onClick={() => onRemoveProp(index)}>
                        <Icon.RemovePropIcon width={16} />
                        Remover
                    </a>
                </li>
            </ul >
        )
    }

    return (
        <div className="flex h-8">
            <Icon.MovePropIcon width={24} />
            {(() => {
                switch (proptype) {
                    case 'text':
                        return (
                            <>
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-xs btn-link no-animation p-0 border-0">
                                        <Icon.TextPropIcon width={24} className="mr-2" />
                                    </div>
                                    {propertyMenu()}
                                </div>
                                <div className="flex grow top-[-4px] border-2 border-transparent rounded focus-within:border-neutral-600">
                                    <input className="bg-zinc-900 h-7 px-2 focus-visible:outline-0 focus:bg-black" type="text" />
                                    <input className="grow bg-zinc-900 h-7 px-2 rounded-r focus-visible:outline-0 focus:bg-black" type="text" />
                                </div>
                            </>
                        )
                    case 'interger':
                        return (
                            <>
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-xs btn-link no-animation p-0 border-0">
                                        <Icon.IntegerPropIcon width={24} className="mr-2" />
                                    </div>
                                    {propertyMenu()}
                                </div>
                                <div className="flex grow top-[-4px] border-2 border-transparent rounded focus-within:border-neutral-600">
                                    <input className="bg-zinc-900 h-7 px-2 focus-visible:outline-0 focus:bg-black" type="text" />
                                    <input className="grow bg-zinc-900 h-7 px-2 rounded-r focus-visible:outline-0 focus:bg-black" type="number" />
                                </div>
                            </>
                        )
                    case 'real':
                        return (
                            <>
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-xs btn-link no-animation p-0 border-0">
                                        <Icon.RealPropIcon width={24} className="mr-2" />
                                    </div>
                                    {propertyMenu()}
                                </div>
                                <div className="flex grow top-[-4px] border-2 border-transparent rounded focus-within:border-neutral-600">
                                    <input className="bg-zinc-900 h-7 px-2 focus-visible:outline-0 focus:bg-black" type="text" />
                                    <input className="grow bg-zinc-900 h-7 px-2 rounded-r focus-visible:outline-0 focus:bg-black" type="number" />
                                </div>
                            </>
                        )
                    case 'check':
                        return (
                            <>
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-xs btn-link no-animation p-0 border-0">
                                        <Icon.CheckboxPropIcon width={24} className="mr-2" />
                                    </div>
                                    {propertyMenu()}
                                </div>
                                <div className="flex grow top-[-4px] border-2 border-transparent rounded focus-within:border-neutral-600">
                                    <input className="bg-zinc-900 h-7 px-2 focus-visible:outline-0 focus:bg-black" type="text" />
                                    <input className="grow bg-zinc-900 h-7 px-2 rounded-r focus-visible:outline-0 focus:bg-black" type="checkbox" />
                                </div>
                            </>
                        )
                    case 'date':
                        return (
                            <>
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-xs btn-link no-animation p-0 border-0">
                                        <Icon.DatePropIcon width={24} className="mr-2" />
                                    </div>
                                    {propertyMenu()}
                                </div>
                                <div className="flex grow top-[-4px] border-2 border-transparent rounded focus-within:border-neutral-600">
                                    <input className="bg-zinc-900 h-7 px-2 focus-visible:outline-0 focus:bg-black" type="text" />
                                    <input className="grow bg-zinc-900 h-7 px-2 rounded-r focus-visible:outline-0 focus:bg-black" type="date" />
                                </div>
                            </>
                        )
                    default:
                        return null
                }
            })()}
        </div>
    )
};
