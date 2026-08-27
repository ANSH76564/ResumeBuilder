const Resume_Preview = ({ name, role, about }) => {
    return (
        <div className="resume">
            <h2>Resume Preview</h2>

            <div className="resume-content">
                <h1>{name || "Your Name"}</h1>
                <h3>{role || "Your Role"}</h3>

                <h4>About</h4>
                <p>{about || "Your introduction will appear here..."}</p>
            </div>
        </div>
    );
};

export default Resume_Preview;