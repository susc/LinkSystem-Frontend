const ERROR_MESSAGE_MAP: Map<string, string> = new Map()

ERROR_MESSAGE_MAP.set('RISK_URL', '该URL存在风险')
ERROR_MESSAGE_MAP.set('INTERNAL_SERVER_ERROR', '服务器内部错误')
ERROR_MESSAGE_MAP.set('NOT_FOUND', '该路径不存在')
ERROR_MESSAGE_MAP.set('MISSING_PARAMETERS', '缺少必要参数')
ERROR_MESSAGE_MAP.set('PARAMETERS_LENGTH_ERROR', '参数长度错误')
ERROR_MESSAGE_MAP.set('CUSTOM_DOMAIN_NOT_FOUND', '找不到指定域名')
ERROR_MESSAGE_MAP.set('LINK_NOT_FOUND', '找不到指定的链接')
ERROR_MESSAGE_MAP.set('URL_IN_BLACKLIST', '该URL禁止缩短')

export default function (errorCode: string): string {
    return ERROR_MESSAGE_MAP.get(errorCode) || '未知错误'
}