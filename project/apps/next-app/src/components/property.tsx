import * as Icon from './icon'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

interface PropertyProps {
    proptype: string
}

export const Property = ({ proptype }: PropertyProps) => {
    const propertyMenu = () => {
        return (
            <ul tabIndex={0} className="dropdown-content menu z-1 bg-base-100 w-60 p-0 shadow border border-neutral-600 rounded-md">
                <li className="dropdown dropdown-right">
                    <a tabIndex={1} role="button">
                        <Icon.ChangePropIcon width={24} />
                        Tipo de Propriedade
                        <ChevronRightIcon className="size-5 text-white" />
                    </a>
                    <ul tabIndex={1} className="dropdown-content menu z-2 bg-base-100 w-60 p-0 shadow border border-neutral-600 rounded-md">
                        <li>
                            <a>
                                <Icon.TextPropIcon width={24} className="mr-2" />
                                Texto
                            </a>
                        </li>
                        <li>
                            <a>
                                <Icon.IntegerPropIcon width={24} className="mr-2" />
                                Inteiro
                            </a>
                        </li>
                        <li>
                            <a>
                                <Icon.RealPropIcon width={24} className="mr-2" />
                                Real
                            </a>
                        </li>
                        <li>
                            <a>
                                <Icon.CheckboxPropIcon width={24} className="mr-2" />
                                Checkbox
                            </a>
                        </li>
                        <li>
                            <a>
                                <Icon.DatePropIcon width={24} className="mr-2" />
                                Data
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="text-orange-700 border-t border-neutral-600">
                    <a>
                        <Icon.RemovePropIcon width={16} />
                        Remover
                    </a>
                </li>
            </ul>
        )
    }

    return (
        <div className="flex h-8">
            <Icon.MovePropIcon width={24} />
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-xs btn-link no-animation p-0 border-0">
                    {(() => {
                        switch (proptype) {
                            case 'text':
                                return (
                                    <Icon.TextPropIcon width={24} className="mr-2" />
                                )
                            case 'integer':
                                return (
                                    <Icon.IntegerPropIcon width={24} className="mr-2" />
                                )
                            case 'real':
                                return (
                                    <Icon.RealPropIcon width={24} className="mr-2" />
                                )
                            case 'check':
                                return (
                                    <Icon.CheckboxPropIcon width={24} className="mr-2" />
                                )
                            case 'date':
                                return (
                                    <Icon.DatePropIcon width={24} className="mr-2" />
                                )
                            default:
                                return null
                        }
                    })()}
                </div>
                {propertyMenu()}
            </div>
            <div className="flex grow relative top-[-4px] border-2 border-transparent rounded focus-within:border-neutral-600">
                <input className="bg-zinc-900 h-7 pl-9 pr-2 focus-visible:outline-0 focus:bg-black" type="text" />
                <input className="grow bg-zinc-900 h-7 px-2 rounded-r focus-visible:outline-0 focus:bg-black" type="text" />
            </div>
        </div>
    )
};
