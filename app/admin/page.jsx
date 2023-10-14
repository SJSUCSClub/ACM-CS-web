import RedirectBtn from "@/components/Buttons/RedirectBtn";
import React from "react";

const AdminHomePage = () => {
    return (
        <div className="h-screen">
            <RedirectBtn url="/admin/create-event" text="Create Event" />
        </div>
    );
};

export default AdminHomePage;
