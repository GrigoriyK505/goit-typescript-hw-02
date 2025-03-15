import {FallingLines} from 'react-loader-spinner'
type LoaderProps = {
    loading: boolean;
}
const Loader: React.FC<LoaderProps> = ({loading}) => {
    return (
        <div>
            <FallingLines
                color="#4fa94d"
                width="100"
                visible={loading}
            />

        </div>
    );
}
export default Loader