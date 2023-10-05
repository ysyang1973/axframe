export enum ApiErrorCode {
  Alert = "0",
  UNKNOWN = "1",
  INVALID_CODE = "1110", //(400, "1110", "잘못된 코드 입니다.")
  INVALID_VALUE = "1120", //(400, "1120", "잘못된 필드값")
  INVALID_PATTERN = "1130", //(400, "1130", "잘못된 형식")
  EMPTY_VALUE = "1140", //(400, "1140", "필드값 누락")
  DOWNLOAD_NOT_FOUND = "1150", //(400, "1150", "다운로드 자료를 찾을 수 없습니다.")
  UPLOAD_SIZE_ERORR = "1160", //(400, "1160", "업로드 크기 초과")
  FILE_EXTEND_ERROR = "1170", //(400, "1170", "파일 확장자 오류")
  TYPE_MISSMATCH = "1180", //(400, "1180", "타입 오류")
  PARAMETER_MISSMATCH = "1190", //(400, "1190", "파라미터 타입 오류")
  NULL_POINT_EXCEPTION = "1210", //(400, "1210", "Null Point Exception")
  DATA_NOT_FOUND = "2110", //(400, "2110", "데이터를 찾을 수 없습니다.")
  DELETE_NOT_EXCUTE = "2120", //(400, "2120", "삭제 하실 수 없습니다.")
  UPDATE_NOT_EXCUTE = "2230", //(400, "2230", "수정 하실 수 없습니다.")
  SAVE_NOT_EXCUTE = "2240", //(400, "2240", "저장 하실 수 없습니다.")
  SQL_SYNTAX_ERROR = "2250", //(400, "2250", "SQL 구문 오류")
  SQL_DUPLICATE_ERROR = "2260", //(400, "2260", "SQL 중복 키 오류")
  SQL_DATA_INTEGRITY = "2270", //(400, "2270", "SQL DataIntegrityViolation")
  LOGIL_FAILED = "4110", //(403, "4110", "로그인 실패")
  PASSWORD_NOT_MATCH = "4120", //(403, "4120", "비밀번호 불일치")
  ACCESS_DENIED = "4130", //(403, "4130", "접근 권한 오류")
  THROWABLE = "4140", //(403, "4140", "Throwable")
  METHOD_ARGUMENT = "4150", //(403, "4150", "Method Argument")
  RUNTIME_EXCEPTION = "4160", //(403, "4160", "Runtime Exception")
  REMOTE_EXCEPTION = "4170", //(403, "4170", "Remote Exception")
  SAME_REQ_EXCEPTION = "4180", //(403, "4180", "동일한 요청입니다.")
  EXPIRED_TOKEN = "9110", //(403, "9110", "토큰이 만료되었습니다.")
  INVALID_TOKEN = "9120", //(403, "9120", "토큰이 유효하지 않습니다.")
}
