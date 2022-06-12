import { IHomeActionEnum } from "../utils/constants";
import { IHomeAction, IHomeState } from "../utils/types";


export default function homeReducer(state: IHomeState, action: IHomeAction): IHomeState {
	switch (action.type) {
		case IHomeActionEnum.SET_LEFT:
			return { ...state, left: action.value }
		case IHomeActionEnum.SET_RIGHT:
			return { ...state, right: action.value }
		case IHomeActionEnum.SET_DIALOG:
			return { ...state, dialog: action.value }
		case IHomeActionEnum.SET_LANG:
			return { ...state, lang: action.value }
		case IHomeActionEnum.ADD_FILE:
			return { ...state, files: [...state.files, action.value] }
		case IHomeActionEnum.SET_SEL_FILE:
			return { ...state, selectedFile: action.value }
		case IHomeActionEnum.SET_CODE:
			return { ...state, code: [...state.code, action.value] }
		default:
			return { ...state }
	}
}