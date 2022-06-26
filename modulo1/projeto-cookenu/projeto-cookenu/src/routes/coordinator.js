export function goToLogin(navigate) {
    navigate("/login")
}

export function goToSignUp(navigate) {
    navigate("/cadastro")
}

export function goToAddRecipes(navigate) {
    navigate("/adicionar-receita")
}

export function goToRecipeDetail(navigate, id) {
    navigate(`/detalhe/${id}`)
}

export function goToRecipesList(navigate) {
    navigate("/")
}
