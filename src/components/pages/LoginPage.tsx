export default function LoginPage() {
  return (
    <form>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>

      <input type="text" id="firstname" name="firstname" placeholder="Entrez votre prénom..." required />
      <button type="submit">Accédez à votre espace</button>
    </form>
  )
}
