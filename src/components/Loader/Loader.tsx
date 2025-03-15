import {FallingLines} from 'react-loader-spinner'
const Loader = ({loading}) => {
    return (
        <div>
            <FallingLines
                color="#4fa94d"
                width="100"
                visible={loading}
                ariaLabel="falling-circles-loading"
            />

        </div>
    );
}
export default Loader