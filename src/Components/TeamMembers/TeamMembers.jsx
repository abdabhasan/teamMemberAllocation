import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";

const TeamMembers = ({ employees, handleEmployeeCardClick, selectedTeam }) => {
  return employees.map((employee) => (
    <TeamMemberCard
      employee={employee}
      selectedTeam={selectedTeam}
      handleEmployeeCardClick={handleEmployeeCardClick}
    />
  ));
};

export default TeamMembers;
