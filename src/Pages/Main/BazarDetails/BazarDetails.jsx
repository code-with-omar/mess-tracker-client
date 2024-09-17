import useBazar from "../../../Hooks/useBazar";


const BazarDetails = () => {
    const [bazar, refetch] = useBazar()
    return (
        <div>
            <h2 className="text-center sm:text-2xl md:text-3xl lg:text-4xl text-[#07332F] font-bold my-5">Bazar Details</h2>
            <div className="overflow-x-auto">
                <table className="table mt-5 md:mt-10">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white text-lg font-semibold">
                        <tr className="border-b-0 rounded">
                            <th>#</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th className="text-right">Extra</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#737373] text-lg">
                        {
                            bazar.map((userId, index) => (
                                <tr key={userId?._id} className="border-b-[.5px] border-[#E8E8E8]">
                                    <td>{index + 1}</td>
                                    <td>{1}</td>
                                    <td>{userId?.bazar} Taka</td>
                                    <td className="text-right">{userId?.extra} Taka</td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default BazarDetails;