import React, { useState } from 'react';
import { CheckCircle2, Lock, Mail, Shield, User, X } from 'lucide-react';
import { UserAccount } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserAccount | null;
  onLoginSuccess: (user: UserAccount) => void;
  onLogout: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLoginSuccess,
  onLogout,
}) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'Reader' | 'Researcher' | 'Community Member' | 'Student'>('Reader');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !email.includes('@')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    if (password.length < 6) {
      setErrorMsg('Password should be at least 6 characters.');
      return;
    }

    if (isSignUp && !name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    const resolvedName = isSignUp ? name.trim() : currentUser?.name || email.split('@')[0];
    const newAccount: UserAccount = {
      id: currentUser?.id || `user-${Date.now()}`,
      name: resolvedName,
      email: email.trim().toLowerCase(),
      isLoggedIn: true,
      role: role,
      purchasedBooks: currentUser?.purchasedBooks || ['karam-puja-monograph-2026'],
      joinedAt: currentUser?.joinedAt || new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    };

    setSuccessMsg(isSignUp ? 'Account created successfully!' : 'Signed in successfully!');
    setTimeout(() => {
      onLoginSuccess(newAccount);
      onClose();
      setSuccessMsg('');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="bg-[#1b4332] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-1">
            <Shield className="w-4 h-4" />
            <span>Assam Heritage Digital Archive</span>
          </div>
          <h2 className="text-xl font-bold font-serif text-amber-50">
            {currentUser?.isLoggedIn ? 'Your Reader Account' : isSignUp ? 'Create Reader Account' : 'Sign In to Reader Portal'}
          </h2>
          <p className="text-xs text-[#d8f3dc]/80 mt-1">
            {currentUser?.isLoggedIn
              ? 'Manage your digital library access and verified book downloads.'
              : 'Sign up to keep all book downloads and receipts saved permanently.'}
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {currentUser?.isLoggedIn ? (
            <div className="space-y-4">
              <div className="p-4 bg-[#faf8f5] rounded-xl border border-stone-200 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#2d6a4f] text-white flex items-center justify-center font-bold text-lg">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">{currentUser.name}</h3>
                  <p className="text-xs text-stone-500">{currentUser.email}</p>
                  <span className="inline-block mt-1 text-[11px] bg-emerald-100 text-emerald-800 font-medium px-2 py-0.5 rounded">
                    {currentUser.role || 'Verified Reader'}
                  </span>
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900">
                <p className="font-semibold mb-1">📚 Active Digital Library Access:</p>
                <p className="text-stone-700">
                  You have active lifetime access to <span className="font-medium">“Karam Puja: Sacred Groves, Living Songs & Tribal Heritage”</span>. You can re-download anytime directly from the book page.
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-medium text-sm transition-colors"
                >
                  Continue to Book
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onLogout();
                    onClose();
                  }}
                  className="py-2.5 px-4 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 font-medium text-sm transition-colors"
                >
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                  {errorMsg}
                </div>
              )}
              {successMsg && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{successMsg}</span>
                </div>
              )}

              {isSignUp && (
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sankar Tanti"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-[#2d6a4f] focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-[#2d6a4f] focus:border-transparent outline-none"
                  />
                </div>
                <p className="text-[11px] text-stone-500 mt-1">
                  Direct book download links and receipts are sent here.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-[#2d6a4f] focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {isSignUp && (
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Reader Affiliation / Interest
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value as any)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-[#2d6a4f] focus:border-transparent outline-none bg-white"
                  >
                    <option value="Reader">General Heritage Reader</option>
                    <option value="Student">Student (Eligible for Cultural Grant)</option>
                    <option value="Researcher">Academic / Folklorist / Anthropologist</option>
                    <option value="Community Member">Tea Tribe / Adivasi Community Member</option>
                  </select>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-semibold text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>{isSignUp ? 'Create Account & Continue' : 'Sign In'}</span>
              </button>

              <div className="pt-2 text-center text-xs text-stone-600">
                {isSignUp ? (
                  <p>
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setIsSignUp(false);
                        setErrorMsg('');
                      }}
                      className="font-semibold text-[#2d6a4f] hover:underline"
                    >
                      Sign In
                    </button>
                  </p>
                ) : (
                  <p>
                    New reader?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setIsSignUp(true);
                        setErrorMsg('');
                      }}
                      className="font-semibold text-[#2d6a4f] hover:underline"
                    >
                      Create Account
                    </button>
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
