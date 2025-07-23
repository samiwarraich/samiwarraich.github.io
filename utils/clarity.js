/**
 * Initialize Microsoft Clarity analytics
 */
export const initializeClarity = () => {
  const MS_CLARITY = process.env.NEXT_PUBLIC_MS_CLARITY;
  
  if (!MS_CLARITY || typeof window === 'undefined') {
    return;
  }

  // Avoid duplicate initialization
  if (window.clarity) {
    return;
  }

  // Clarity tracking code
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", MS_CLARITY);
};