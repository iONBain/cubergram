const ModalProfile = ({ dataUsers,theme,showFollowingers,toggleFollowingers }) => {
    console.log(dataUsers, "from modal profile");
    return (
      <section className={`modal-100 ${!showFollowingers && "display-none"}`}>
      <section
        className="modal-100 overlay-dark"
        onClick={toggleFollowingers}
      ></section>
      <section
        className={`edit-user-main center-box flex-col gap-16 text-left saic p-10 ${
          theme === "dark" ? "dark" : "bg-white"
        }`}
      >
        {dataUsers && dataUsers.map((fUser) => {
          return (
            <>
              <img
                src={fUser.avatar}
                className="user-avatar-img bor-rad-50"
                alt=""
              />
              {fUser.username}
            </>
          );
        })}
        </section>
        </section>
    );
  };

  export default ModalProfile