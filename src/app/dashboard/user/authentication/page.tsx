"use client"

import UserAuthentication from "@/components/UserAuthentication";


const Authentication = ({ children }: any) => {

    return (
        <div>
            <h1 className="ml-10 text-xl font-semibold">Autenticação</h1>
            <UserAuthentication></UserAuthentication>
        </div>
    );
};

export default Authentication;
