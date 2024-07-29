/* eslint-disable no-console, react/no-access-state-in-setstate, react/no-danger, no-param-reassign */
import React, { useState } from 'react'
import './nav-menu.css'
import Tree from 'rc-tree';
/* import Tree, { TreeNode } from 'rc-tree'; */
import { gData } from './utils/dataUtil';

const motion = {
    motionName: 'node-motion',
    motionAppear: false,
    onAppearStart: (node: any) => {
        console.log('Start Motion:', node);
        return { height: 0 };
    },
    onAppearActive: (node: any) => ({ height: node.scrollHeight }),
    onLeaveStart: (node: any) => ({ height: node.offsetHeight }),
    onLeaveActive: () => ({ height: 0 }),
};

// const gData = [
//   { title: '0-0', key: '0-0' },
//   { title: '0-1', key: '0-1' },
//   { title: '0-2', key: '0-2', children: [{ title: '0-2-0', key: '0-2-0' }] },
// ];

export default function NavMenu() {
    type State = {
        expandedKeys: string[]
    }

    const [state, setState] = useState(
        {
            gData,
            autoExpandParent: true,
            expandedKeys: ['0-0-key', '0-0-0-key', '0-0-0-0-key'],
        }
    )


    const onDragEnter = ({ expandedKeys }: State): void => {
        console.log('enter', expandedKeys);
        setState({
            ...state, expandedKeys
        });
    };

    const onDrop = (info: any) => {
        console.log('drop', info);
        const dropKey = info.node.props.eventKey;
        const dragKey = info.dragNode.props.eventKey;
        const dropPos = info.node.props.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

        const loop = (data: any, key: any, callback: any) => {
            data.forEach((item: any, index: any, arr: any) => {
                if (item.key === key) {
                    callback(item, index, arr);
                    return;
                }
                if (item.children) {
                    loop(item.children, key, callback);
                }
            });
        };
        const data = [...state.gData];

        // Find dragObject
        let dragObj: any;
        loop(data, dragKey, (item: any, index: any, arr: any) => {
            arr.splice(index, 1);
            dragObj = item;
        });

        if (!info.dropToGap) {
            // Drop on the content
            loop(data, dropKey, (item: any) => {
                item.children = item.children || [];
                // where to insert 示例添加到尾部，可以是随意位置
                item.children.push(dragObj);
            });
        } else if (
            (info.node.props.children || []).length > 0 && // Has children
            info.node.props.expanded && // Is expanded
            dropPosition === 1 // On the bottom gap
        ) {
            loop(data, dropKey, (item: any) => {
                item.children = item.children || [];
                // where to insert 示例添加到尾部，可以是随意位置
                item.children.unshift(dragObj);
            });
        } else {
            // Drop on the gap
            let ar: any[];
            let i: number = 0;
            loop(data, dropKey, (item: any, index: any, arr: any) => {
                ar = arr;
                i = index;
            });
            if (dropPosition === -1) {
                ar.splice(i, 0, dragObj);
            } else {
                ar.splice(i + 1, 0, dragObj);
            }
        }

        setState({
            ...state, gData: data
        });
    };

    const onExpand = (expandedKeys: String[]) => {
        console.log('onExpand', expandedKeys);
        setState({
            ...state,
            expandedKeys,
            autoExpandParent: false,
        });
    };

    const { expandedKeys } = state;

    return (
        <>
            <Tree
                defaultExpandAll
                showLine
                expandedKeys={expandedKeys}
                onExpand={onExpand}
                autoExpandParent={state.autoExpandParent}
                draggable
                onDragStart={onDragStart}
                onDragEnter={onDragEnter}
                onDrop={onDrop}
                treeData={state.gData}
                motion={motion}
            />

            {/* <Tree defaultExpandAll showLine>
                <TreeNode title="root node" key="0-0">
                    <TreeNode title="parent 1 default value(true)" key="0-0-0">
                        <TreeNode
                            title="use parent 1 value if dont set selectable obviously"
                            key="0-0-0-0"
                        />
                        <TreeNode selectable={true} title="set selectable is true" key="0-0-0-1" />
                    </TreeNode>
                    <TreeNode title="parent 2 selectable is false" selectable={false} key="0-0-1">
                        <TreeNode
                            selectable={false}
                            title="use parent 2 value if dont set selectable obviously"
                            key="0-0-1-0"
                        />
                        <TreeNode
                            selectable={true}
                            title="if set selectable obviously, it does't affect by parent"
                            key="0-0-1-1"
                        />
                    </TreeNode>
                    <TreeNode title="parent 3 disabled" key="0-0-2" disabled>
                        <TreeNode
                            selectable={false}
                            title="parent is disable ,and selectable is false"
                            key="0-0-2-0"
                        />
                        <TreeNode
                            selectable={true}
                            title="parent is disable ,and selectable is true"
                            key="0-0-2-1"
                        />
                    </TreeNode>
                </TreeNode>
            </Tree> */}
        </>
    )
}