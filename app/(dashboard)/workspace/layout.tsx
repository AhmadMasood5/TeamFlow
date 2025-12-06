import React, { ReactNode } from "react";
import { WorkSpaceList } from "./_components/workspacelist";
import { CreateWorkspace } from "./_components/createWorkspace";
import { UserNav } from "./_components/usernav";
const WorkspaceLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full h-screen">
      <div className="flex h-full w-16 flex-col items-center bg-secondary py-3 px-2 border-r border-border">
        <WorkSpaceList />
        <div className="mt-4">
          <CreateWorkspace />
        </div>
        <div className="mt-auto">
          <UserNav />
        </div>
      </div>
      {children}
    </div>
  );
};

export default WorkspaceLayout;
