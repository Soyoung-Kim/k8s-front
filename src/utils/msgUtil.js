export default {
    message(msgCode) {
        console.log('msgCode == ' + msgCode);
        switch (msgCode) {
            /*
             * 코드정의
             * S : 서버통신 성공 메세지
             * E : 서버통신 에러 메세지
             * N : 노티 메세지
             * C : 컨펌 메세지
             */
            /* S : 서버통신 성공 메세지 */
            case 'S1':
                return '계정정보가 변경되었습니다.';
                break;

            case 'S2':
                return '데이터가 저장 되었습니다.';
                break;

            case 'S3':
                return '';
                break;

            case 'S4':
                return '';
                break;

            case 'S5':
                return '';
                break;

            case 'S6':
                return '';
                break;

            case 'S7':
                return '';
                break;

            case 'S8':
                return '';
                break;

            case 'S9':
                return '';
                break;

            case 'S10':
                return '';
                break;

            /* E : 서버통신 에러 메세지 */
            case 'E1':
                return '서비스에 불편을 드려서 죄송합니다.\n 잠시후 다시 시도해주세요.'; // return code null : nullPointException
                break;

            case 'E2':
                return '잠시 후 다시 시도해주세요.';
                break;

            case 'E3':
                return '계정정보 수정 중 오류가 발생하였습니다.';
                break;

            case 'E4':
                return '데이터 저장 중 오류가 발생하였습니다.';
                break;

            case 'E5':
                return '다시 로그인해주시기 바랍니다.';
                break;

            case 'E6':
                return '다운로드 중 오류가 발생하였습니다.';
                break;

            case 'E7':
                return '';
                break;

            case 'E8':
                return '';
                break;

            case 'E9':
                return '';
                break;

            case 'E10':
                return '';
                break;

            /* N : 노티 메세지 */
            case 'N1':
                return '';
                break;

            case 'N2':
                return '';
                break;

            case 'N3':
                return '';
                break;

            case 'N4':
                return '';
                break;

            case 'N5':
                return '';
                break;

            case 'N6':
                return '';
                break;

            case 'N7':
                return '';
                break;

            case 'N8':
                return '';
                break;

            case 'N9':
                return '';
                break;

            case 'N10':
                return '';
                break;

            case 'N11':
                return '';
                break;

            case 'N12':
                return '';
                break;

            case 'N13':
                return '';
                break;

            case 'N14':
                return '';
                break;

            case 'N15':
                return '';
                break;

            case 'N16':
                return '';
                break;

            case 'N17':
                return '';
                break;

            case 'N18':
                return '';
                break;

            case 'N19':
                return '';
                break;

            /* C : 컨펌 메세지 */
            case 'C1':
                return '앱을 종료하시겠습니까?';
                break;

            case 'C2':
                return '';
                break;

            case 'C3':
                return '';
                break;

            case 'C4':
                return '';
                break;

            case 'C5':
                return '';
                break;

            case 'C6':
                return '';
                break;

            case 'C7':
                return '';
                break;

            case 'C8':
                return '로그아웃 하시겠습니까?';
                break;

            case 'C9':
                return '';
                break;

            default:
                return '서비스 이용에 \n불편을 드려서 죄송합니다. \n 잠시후 다시 시도해주세요.';
        }
    },
};
