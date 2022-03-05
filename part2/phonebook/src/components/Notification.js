const Notification = ({ message, messageType }) => {
    if (message === null) {
        return null
    }

    let className = ""
    switch (messageType) {
        case "phone-add":
            className = "phone-added"
            break;
        case "phone-error-add":
            className = "phone-error-added"
            break
        default:
            break
    }


    return (
        <div className={className}>
            {message}
        </div>
    )
}

export default Notification