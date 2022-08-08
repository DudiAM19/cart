package com.testvers;

import com.facebook.react.modules.network.OkHttpClientFactory;
import com.facebook.react.modules.network.OkHttpClientProvider;
import okhttp3.CertificatePinner;
import okhttp3.OkHttpClient;

public class SSLPinningFactory implements OkHttpClientFactory {
    private static String hostname = "mockapi.io";


    public OkHttpClient createNewNetworkModuleClient() {
        CertificatePinner certificatePinner = new CertificatePinner.Builder()
            .add(hostname, "sha256/47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=")
            .build();

            OkHttpClient.Builder clientBuilder = OkHttpClientProvider.createClientBuilder();
            return clientBuilder
                    .certificatePinner(certificatePinner)
                    .build();
    }
}
