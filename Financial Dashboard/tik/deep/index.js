document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const signupPassword = document.getElementById('signup-password');
    const confirmPassword = document.getElementById('confirm-password');
    const passwordMatchHint = document.getElementById('password-match-hint');
    const loginStrength = document.getElementById('login-strength');
    const signupStrength = document.getElementById('signup-strength');
    // Toggle between login and signup forms
    showSignup.addEventListener('click', function(e) {
        e.preventDefault();
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
    });
    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        signupContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    });
    // Password strength indicator
    function checkPasswordStrength(password, strengthMeter) {
        // Reset strength meter
        strengthMeter.className = 'strength-meter';
       
        if (password.length === 0) return;
       
        // Strength criteria
        const hasLetters = /[a-zA-Z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const isLong = password.length >= 8;
       
        let strength = 0;
        if (hasLetters) strength += 1;
        if (hasNumbers) strength += 1;
        if (hasSpecial) strength += 1;
        if (isLong) strength += 1;
       
        // Update strength meter
        if (strength <= 1) {
            strengthMeter.classList.add('weak');
        } else if (strength <= 3) {
            strengthMeter.classList.add('medium');
        } else {
            strengthMeter.classList.add('strong');
        }
    }
    // Password match checker
    function checkPasswordMatch() {
        const password = signupPassword.value;
        const confirm = confirmPassword.value;
       
        if (password && confirm) {
            if (password === confirm) {
                passwordMatchHint.textContent = 'Passwords match!';
                passwordMatchHint.style.color = '#2ecc71';
            } else {
                passwordMatchHint.textContent = 'Passwords do not match';
                passwordMatchHint.style.color = '#e74c3c';
            }
        } else {
            passwordMatchHint.textContent = '';
        }
    }
    // Event listeners for password fields
    signupPassword.addEventListener('input', function() {
        checkPasswordStrength(this.value, signupStrength);
        checkPasswordMatch();
    });
    confirmPassword.addEventListener('input', checkPasswordMatch);
    document.getElementById('login-password').addEventListener('input', function() {
        checkPasswordStrength(this.value, loginStrength);
    });
    // Form submission handlers
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your login logic here
        alert('Login functionality would be implemented here');
    });
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your signup logic here
        alert('Signup functionality would be implemented here');
    });
});