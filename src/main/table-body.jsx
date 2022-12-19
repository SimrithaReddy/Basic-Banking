const TableBody = (props) => {
    const { userData } = props
    return (
        <>
            <table className="m-auto border-2">
                <thead>
                    <tr>
                        <th className="mx-8 pr-10 p-auto pb-5 pt-5 pl-3">S.no</th>
                        <th className="mx-8 pr-10 p-auto pb-5 pt-5">Name</th>
                        <th className="mx-8 pr-10 p-auto pb-5 pt-5">Email</th>
                        <th className="mx-8 pr-10 p-auto pb-5 pt-5">Balance</th>
                        <th className="mx-8 pr-10 p-auto pb-5 pt-5 pl-4">Account Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((ele, i) => {
                            return (
                                <tr key={`${ele}-${i}`}>
                                    <td className="mx-8 pr-10 p-auto pb-5 pt-5">{i + 1}</td>
                                    <td className="mx-8 pr-10 p-auto pb-5 pt-5">{ele.name}</td>
                                    <td className="mx-8 pr-10 p-auto pb-5 pt-5">{ele.email}</td>
                                    <td className="mx-8 pr-10 p-auto pb-5 pt-5">{ele.balance}</td>
                                    <td className="mx-8 pr-10 p-auto pb-5 pt-5">{ele.account}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableBody;