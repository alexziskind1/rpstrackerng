import { PtItem } from '../../../core/models/domain';

export interface PtItemDetailsEditFormModel {
    title: string;
    description: string;
    typeStr: string;
    statusStr: string;
    estimate: number;
    priorityStr: string;
    assigneeName: string;
}

export function ptItemToFormModel(item?: PtItem): PtItemDetailsEditFormModel {
    if (!item) {
        return {
            title: '',
            description: '',
            typeStr: '',
            statusStr: '',
            estimate: 0,
            priorityStr: '',
            assigneeName: ''
        }
    } else {
        return {
            title: item.title ? item.title : '',
            description: item.description ? item.description : '',
            typeStr: item.type,
            statusStr: item.status,
            estimate: item.estimate,
            priorityStr: item.priority,
            assigneeName: item.assignee ? item.assignee.fullName : 'unassigned'
        };
    }
}
