function StudentCard({ prenom, nom, email, telephone, filiere }) {
  return (
    <article className="student-card">
      <h2>{prenom} {nom}</h2>
      <p>Email : {email}</p>
      <p>Téléphone : {telephone}</p>
      <p>Filière : {filiere}</p>
    </article>
  );
}

export default StudentCard;