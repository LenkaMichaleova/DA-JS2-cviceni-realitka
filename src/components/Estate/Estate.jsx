export const Estate = ({data}) => {
    return (
        <main>
            <h2>{data.title}</h2>
            <img src={data.photo} alt={window.location.pathname.slice(1, -5)} />
            <p>{data.text}</p>
            <h3>Cena: {data.price},-</h3>
            <h4>Město: {data.city}</h4>
            <p>
                <strong>Kontakt:</strong>
                <br />{data.contact.name}
                <br />{data.contact.email}
                <br />{data.contact.phone}
            </p>
        </main>
    )
}